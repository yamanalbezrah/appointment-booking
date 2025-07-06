# Deployment Guide - Appointment Booking App

## 🚀 **Best Free Hosting Options (No Payment Required)**

Since Replit requires payment, here are better alternatives:

## Option 1: Railway.app (Recommended)

### Backend Deployment:
1. **Go to [Railway.app](https://railway.app)** and sign up with GitHub
2. **Click "New Project"** → "Deploy from GitHub repo"
3. **Select your repository**: `yamanalbezrah/appointment-booking`
4. **Set the root directory** to `backend`
5. **Add environment variables** (optional for email):
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

## Option 2: Render.com (Free Tier Available)

### Backend:
1. **Go to [Render.com](https://render.com)** and sign up
2. **Click "New +"** → "Web Service"
3. **Connect GitHub** and select your repository
4. **Set root directory** to `backend`
5. **Build command**: `pip install -r requirements.txt`
6. **Start command**: `gunicorn app:app`
7. **Deploy**

### Frontend:
1. **Click "New +"** → "Static Site"
2. **Connect GitHub** and select your repository
3. **Set root directory** to `/` (project root)
4. **Build command**: `npm install && npm run build`
5. **Publish directory**: `build`
6. **Add environment variable**: `REACT_APP_API_URL` = your backend URL
7. **Deploy**

## Option 3: Netlify (Frontend) + Railway (Backend)

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

## 🔧 Local Development

To run locally:

**Backend:**
```cmd
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

**Frontend:**
```cmd
npm install
npm start
```

## 📝 Features Included

✅ **Delete All Bookings Button**
- Added to Admin Dashboard
- Confirmation dialog before deletion
- Visual feedback during deletion
- Disabled when no bookings exist

✅ **Time Format Fix**
- Removed "T" from datetime display
- Shows readable format: "June 11, 2025 at 09:37 PM"

✅ **Environment Variables**
- Supports different API URLs for local/remote
- Easy deployment configuration

## 🎯 Recommended Steps

1. **Deploy backend to Railway.app** (free, reliable)
2. **Deploy frontend to Vercel** (free, fast)
3. **Connect them** with environment variables
4. **Share the Vercel URL** with your users

## 💰 Cost Comparison

- **Railway + Vercel**: ✅ Completely free
- **Render.com**: ✅ Free tier available
- **Netlify + Railway**: ✅ Completely free
- **Replit**: ❌ Requires payment

Your app will be accessible to anyone with the link - no downloads required! 