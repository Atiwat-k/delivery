const express = require('express');
const app = express();
const userRoutes = require('./api/user'); // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง

// Middleware สำหรับรับข้อมูล JSON
app.use(express.json()); 

// กำหนดเส้นทาง API
app.use('/api', userRoutes);

// กำหนดพอร์ตสำหรับเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
