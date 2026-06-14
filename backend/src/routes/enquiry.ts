import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Enquiry from '../models/Enquiry';

const router = express.Router();

const DATA_DIR = path.join(__dirname, '../../data');
const DATA_FILE = path.join(DATA_DIR, 'enquiries.json');

// Helper to save enquiry locally
const saveLocally = (name: string, email: string, phone: string) => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  let enquiries: any[] = [];
  if (fs.existsSync(DATA_FILE)) {
    try {
      const fileData = fs.readFileSync(DATA_FILE, 'utf8');
      enquiries = JSON.parse(fileData);
    } catch (err) {
      console.error('Failed to parse local enquiries file, resetting...', err);
      enquiries = [];
    }
  }

  const newRecord = {
    name,
    email,
    phone,
    createdAt: new Date(),
    _id: new mongoose.Types.ObjectId().toString(),
    storageFallback: true
  };

  enquiries.push(newRecord);
  fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), 'utf8');
  console.log(`Saved enquiry for ${email} to fallback local file database.`);
};

router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields (name, email, phone) are required.' 
    });
  }

  if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address.' 
    });
  }

  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid 10-digit phone number.' 
    });
  }

  // If MongoDB is not connected, use the local JSON file database immediately to avoid long buffering delays
  if (mongoose.connection.readyState !== 1) {
    console.log('MongoDB connection is not active. Using fallback local storage.');
    try {
      saveLocally(name, email, phone);
      return res.status(201).json({
        success: true,
        message: 'Enquiry submitted successfully!'
      });
    } catch (fallbackError) {
      console.error('Local storage fallback failed:', fallbackError);
      return res.status(500).json({
        success: false,
        message: 'Server error. Failed to save your enquiry.'
      });
    }
  }

  try {
    const newEnquiry = new Enquiry({ name, email, phone });
    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully!'
    });
  } catch (error) {
    console.error('Error saving to MongoDB, attempting fallback local storage:', error);
    try {
      saveLocally(name, email, phone);
      res.status(201).json({
        success: true,
        message: 'Enquiry submitted successfully!'
      });
    } catch (fallbackError) {
      console.error('Local storage fallback failed after MongoDB save error:', fallbackError);
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again later.'
      });
    }
  }
});

export default router;
