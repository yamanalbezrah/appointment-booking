# Deployment Guide - Appointment Booking App

## 🚀 Deploy to Render.com (Free Hosting)

### Step 1: Prepare Your Code
1. Make sure all your changes are committed to Git
2. Ensure you have the following files in your project:
   - `requirements.txt` (for Python dependencies)
   - `render.yaml` (for deployment configuration)
   - `package.json` (for Node.js dependencies)

### Step 2: Deploy to Render.com

1. **Go to [Render.com](https://render.com)** and sign up/login

2. **Connect your GitHub repository:**
   - Click "New +" → "Blueprint"
   - Connect your GitHub account
   - Select your appointment-booking repository

3. **Deploy using the render.yaml file:**
   - Render will automatically detect the `render.yaml` file
   - Click "Apply" to deploy both services

4. **Wait for deployment:**
   - Backend will deploy first (Python service)
   - Frontend will deploy second (Static site)
   - Each service will get a unique URL

### Step 3: Get Your Shareable Links

After deployment, you'll get:
- **Frontend URL**: `https://appointment-booking-frontend.onrender.com`
- **Backend URL**: `https://appointment-booking-backend.onrender.com`

### Step 4: Share Your App

Share the frontend URL with anyone! They can:
- Book appointments without downloading anything
- View all bookings (if you share the admin link)
- Access from any device with a web browser

## 🔧 Local Development

To run locally:

**Backend:**
```cmd
cd backend
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

**Frontend:**
```cmd
npm install
npm start
```

## 📝 Features Added

✅ **Delete All Bookings Button**
- Added to Admin Dashboard
- Confirmation dialog before deletion
- Visual feedback during deletion
- Disabled when no bookings exist

✅ **Deployment Ready**
- Environment variables for API URLs
- Production-ready configuration
- Free hosting on Render.com

## 🎯 Next Steps

1. Deploy to Render.com using the steps above
2. Test the deployed app
3. Share the frontend URL with your users
4. Monitor bookings through the admin dashboard

Your app will be accessible to anyone with the link - no downloads required! 