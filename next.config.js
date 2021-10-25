/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.apiKey,
    NEXT_PUBLIC_AUTH_DOMAIN: process.env.authDomain,
    NEXT_PUBLIC_FIREBASE_DATABASE_URL: process.env.databaseURL,
    NEXT_PUBLIC_PROJECT_ID: process.env.projectId,
    NEXT_PUBLIC_STORAGE_BUCKET: process.env.storageBucket,
    NEXT_PUBLIC_MESSAGING_SENDER_ID: process.env.messagingSenderId,
    NEXT_PUBLIC_APP_ID: process.env.appId,
  },
};
