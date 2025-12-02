# Deploy to Netlify (Recommended - No GitHub Required)

Follow these steps to deploy your "Kingdom of Kush" website publicly and permanently on Netlify.

## Prerequisites
- A Netlify account (free at https://app.netlify.com)

## Option 1: Deploy from Local Machine (Fastest)

### Step 1: Install Netlify CLI
```powershell
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```powershell
netlify login
```
This will open your browser to authorize the CLI. Click "Authorize" and return to the terminal.

### Step 3: Build and Deploy
```powershell
netlify deploy --prod
```

When prompted:
- **Publish directory?** → Type `dist` and press Enter
- The CLI will build the project and deploy it

Your site will be live at a Netlify URL (e.g., `https://your-site-name.netlify.app`)

---

## Option 2: Deploy from Netlify Web Dashboard (Easier GUI)

### Step 1: Build the project locally
```powershell
npm run build
```

### Step 2: Create a ZIP file of the `dist/` folder
1. Open File Explorer
2. Navigate to your project folder
3. Right-click the `dist` folder → **Send to** → **Compressed (zipped) folder**
4. A `dist.zip` file will be created

### Step 3: Upload to Netlify
1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag & drop the `dist.zip` file (or click to upload)
4. Netlify will extract and deploy it automatically

Your live URL will appear immediately!

---

## Option 3: GitHub + Netlify (Recommended for Continuous Deployment)

### Step 1: Push to GitHub
1. Create a new repository on GitHub (https://github.com/new)
2. Copy the repository SSH or HTTPS URL
3. In your local terminal:
```powershell
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

### Step 2: Connect GitHub to Netlify
1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** and authorize Netlify
4. Choose your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click **Deploy**

From now on, every push to `main` will auto-deploy your site!

---

## Quick Links
- Netlify Dashboard: https://app.netlify.com
- Your Site Settings (after deploy): Dashboard → Site settings → Change site name
- Custom Domain: Dashboard → Site settings → Domain management → Add custom domain

---

## Next Steps After Deployment

1. **Test the deployed site** — Visit the live URL and check all pages and routes
2. **Set a custom domain** — Change from `something.netlify.app` to your own domain
3. **Enable HTTPS** — Netlify auto-enables this for free
4. **Check site performance** — Use Lighthouse in Chrome DevTools

---

Recommended: Use **Option 1 (Netlify CLI)** for fastest deployment, or **Option 3 (GitHub)** for automatic updates every time you push code!
