# Vercel Deployment Guide

## Environment Variables Setup

In your Vercel dashboard, go to your project settings and add these environment variables:

### Required Environment Variables:

1. **ANKR_URL**
   - Value: `https://rpc.ankr.com/eth_sepolia/9cf388c443fd66e03a847ee8b6b29caef573e78dd3eee631796260e8d9c73671`

2. **PRIVATE_KEY**
   - Value: `0x9cf388c443fd66e03a847ee8b6b29caef573e78dd3eee631796260e8d9c73671`

3. **PINATA_API_KEY**
   - Value: `a7e566e8e96efcd7e8b7`

4. **PINATA_SECRET_KEY**
   - Value: `87844372e4ae9aabcda54d7531bfc6fa63f3a91d3cf0ad6e553ed89fe84b5ea3`

## Deployment Steps:

1. **Push to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add all the variables listed above
   - Set them for "Production", "Preview", and "Development" environments

4. **Deploy**
   - Vercel will automatically deploy after connecting the repository
   - Or click "Deploy" to manually trigger deployment

## Access URLs:

After deployment, your app will be available at:
- **Program Tracker**: `https://your-app.vercel.app/program-tracker`
- **Payment Tracker**: `https://your-app.vercel.app/payment`

## Troubleshooting:

- If you get "secrets not found" errors, make sure environment variables are set in Vercel dashboard
- Check the deployment logs in Vercel for specific error messages
- Ensure all environment variables are properly set for the correct environment (Production/Preview/Development)

## File Structure for Deployment:

The following files are included in deployment:
- `server.js` (main backend)
- `index.html`, `program-tracker.html`, `payment.html` (frontend)
- `package.json` (dependencies)
- `abi.json`, `payment-abi.json` (contract ABIs)
- `vercel.json` (deployment configuration)

The following files are excluded (.vercelignore):
- `.env` (local environment file)
- `contracts/` (Solidity source files)
- `node_modules/` (dependencies)
- `uploads/` (temporary files)
