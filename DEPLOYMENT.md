# Deployment Guide - Appointment Booking App

## 🚀 Free Hosting Options (Updated)

Since Render.com changed their free tier, here are the best alternatives:

## Option 1: Railway.app (Recommended)

### Backend Deployment:
1. **Go to [Railway.app](https://railway.app)** and sign up with GitHub
2. **Click "New Project"** → "Deploy from GitHub repo"
3. **Select your repository**: `yamanalbezrah/appointment-booking`
4. **Set the root directory** to `backend`
5. **Add environment variables**:
   - `MAIL_USERNAME`: your-email@gmail.com
   - `MAIL_PASSWORD`: your-app-password
6. **Deploy** - Railway will automatically detect Python and install dependencies

### Frontend Deployment (Vercel):
1. **Go to [Vercel.com](https://vercel.com)** and sign up with GitHub
2. **Click "New Project"** → Import your repository
3. **Set the root directory** to `/` (project root)
4. **Add environment variable**:
   - `REACT_APP_API_URL`: Your Railway backend URL
5. **Deploy**

## Option 2: Netlify (Frontend) + Railway (Backend)

### Backend (Railway):
Same as Option 1 above.

### Frontend (Netlify):
1. **Go to [Netlify.com](https://netlify.com)** and sign up
2. **Click "New site from Git"**
3. **Connect GitHub** and select your repository
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
5. **Add environment variable**:
   - `REACT_APP_API_URL`: Your Railway backend URL
6. **Deploy**

## Option 3: Render.com (Paid Tier)

If you want to stick with Render:
1. **Upgrade to a paid plan** ($7/month)
2. **Use the existing render.yaml** file
3. **Deploy as before**

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

✅ **Time Format Fix**
- Removed "T" from datetime display
- Shows readable format: "June 11, 2025 at 09:37 PM"

✅ **Deployment Ready**
- Environment variables for API URLs
- Production-ready configuration
- Multiple hosting options

## 🎯 Recommended Deployment Steps

1. **Deploy backend to Railway.app** (free, reliable)
2. **Deploy frontend to Vercel** (free, fast)
3. **Connect them** with environment variables
4. **Share the Vercel URL** with your users

Your app will be accessible to anyone with the link - no downloads required!

## 💰 Cost Comparison

- **Railway + Vercel**: Free tier available
- **Netlify + Railway**: Free tier available  
- **Render.com**: $7/month (paid tier)
- **Heroku**: $5/month (paid tier) 