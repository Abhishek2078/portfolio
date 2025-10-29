# Deploy Portfolio to abhishekrajmishra.com.np

Your production build is ready in the `build/` folder! Here are deployment options:

## Option 1: Netlify (Recommended - Easiest)

1. **Go to [Netlify.com](https://www.netlify.com)** and sign up/login

2. **Add your build folder:**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `build` folder from `portfolio-website/build/`

3. **Configure custom domain:**
   - Click "Domain settings"
   - Add custom domain: `abhishekrajmishra.com.np`
   - Netlify will show you DNS records to add
   - Add these DNS records to your domain provider

4. **Your site will be live!** Netlify will provide auto HTTPS

## Option 2: Vercel (Also Easy)

1. **Go to [Vercel.com](https://vercel.com)** and sign up/login

2. **Import your project:**
   - Click "New Project"
   - Connect to GitHub (or deploy directly)
   - Select the `portfolio-website` folder
   - Click "Deploy"

3. **Add custom domain:**
   - Go to Project Settings → Domains
   - Add `abhishekrajmishra.com.np`
   - Add DNS records shown by Vercel

## Option 3: GitHub Pages + GitHub Actions

1. **Push code to GitHub:**
```bash
cd portfolio-website
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Add GitHub Actions:**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

3. **Enable GitHub Pages:**
   - Settings → Pages → Source: GitHub Actions

4. **Add custom domain:**
   - Create `build/CNAME` file with content: `abhishekrajmishra.com.np`
   - Configure DNS at your domain provider

## Option 4: Traditional Web Hosting (cPanel/Server)

1. **Upload files via FTP:**
```bash
# Build is ready in portfolio-website/build/
# Upload ALL contents of build/ folder to public_html/
```

2. **Via SSH/SCP:**
```bash
scp -r build/* username@your-server:/var/www/html/
# Or
scp -r build/* username@abhishekrajmishra.com.np:/public_html/
```

3. **Configure DNS:**
   - Point A record to your server IP
   - Add CNAME record if needed

## Option 5: Cloudflare Pages (Free & Fast)

1. **Go to [Cloudflare Pages](https://pages.cloudflare.com)**

2. **Connect Repository:**
   - Sign in with GitHub
   - Select your repository
   - Build command: `npm run build`
   - Build output: `build`

3. **Add custom domain:**
   - Go to Custom domains
   - Add `abhishekrajmishra.com.np`
   - Update DNS records at your domain provider

## DNS Configuration Needed

At your domain provider (where you bought abhishekrajmishra.com.np), add:

**For Netlify/Vercel:**
- Type: CNAME
- Name: @ or www
- Value: [provided by hosting service]
- TTL: Auto

**For GitHub Pages:**
- Type: A / AAAA
- Value: [GitHub's IP addresses]
- OR CNAME to your username.github.io

**For Traditional Hosting:**
- Type: A
- Name: @
- Value: Your server's IP address

## Quick Deployment Commands

```bash
# After building, test locally first:
npm install -g serve
serve -s build

# For FTP upload:
# Use FileZilla or similar to upload build/* contents

# For SCP (Unix/Linux/Mac):
scp -r build/* user@your-server:/public_html/
```

## Post-Deployment Checklist

✅ Site loads at abhishekrajmishra.com.np
✅ HTTPS certificate is active
✅ All pages work correctly
✅ Resume downloads successfully
✅ Mobile responsive
✅ All links work (GitHub, LinkedIn, etc.)

## Need Help?

Common issues:
- **DNS not propagated**: Wait 24-48 hours
- **404 errors**: Check that build folder contents are in root, not build/ folder itself
- **HTTPS issues**: Most modern hosting auto-generates SSL certificates
- **Resume not downloading**: Verify resume.pdf is in public/ folder before building
