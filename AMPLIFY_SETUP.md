# AWS Amplify Deployment Guide for Vallaroo Landing Page

This guide will help you deploy your Vallaroo landing page to AWS Amplify.

## Prerequisites

- AWS Account (free tier available)
- GitHub repository with your code
- Domain name (vallaroo.com) configured in Route 53

## Step 1: AWS Amplify Setup

### 1.1 Create Amplify App
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Choose **"GitHub"** as source
4. Authorize GitHub connection
5. Select your repository: `vallaroo/landing-main`
6. Choose branch: `main`
7. Click **"Next"**

### 1.2 Configure Build Settings
The `amplify.yml` file is already configured, but you can verify these settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
        - rm -rf .next
    build:
      commands:
        - npm run build
        - npm run export
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
      - ~/.npm/**/*
```

### 1.3 Environment Variables
In Amplify console → **App settings** → **Environment variables**, add:

```
NEXT_PUBLIC_SITE_URL=https://vallaroo.com
NEXT_PUBLIC_API_URL=https://api.vallaroo.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SUPPORT_EMAIL=support@vallaroo.com
NEXT_PUBLIC_SALES_EMAIL=sales@vallaroo.com
NODE_ENV=production
```

## Step 2: Custom Domain Setup

### 2.1 Add Custom Domain
1. In Amplify console → **Domain management**
2. Click **"Add domain"**
3. Enter: `vallaroo.com`
4. Click **"Configure domain"**

### 2.2 Configure Subdomains
- Add `www.vallaroo.com` as subdomain
- Both will point to the same Amplify app

### 2.3 DNS Configuration
Update your Route 53 DNS records:

```
# CNAME for www subdomain
Type: CNAME
Name: www
Value: [Amplify-provided-CNAME]
TTL: 300

# A record for root domain
Type: A
Name: @
Value: [Amplify-provided-IP]
TTL: 300
```

## Step 3: SSL Certificate

### 3.1 Automatic SSL
- Amplify automatically provisions SSL certificates
- Uses AWS Certificate Manager (ACM)
- Free SSL certificates for your domain

### 3.2 Force HTTPS
- Amplify automatically redirects HTTP to HTTPS
- No additional configuration needed

## Step 4: Build and Deploy

### 4.1 Trigger Build
```bash
# Push changes to trigger build
git add .
git commit -m "feat: configure AWS Amplify deployment"
git push origin main
```

### 4.2 Monitor Build
- Go to Amplify console → **App** → **Build history**
- Monitor build progress and logs
- Build typically takes 2-5 minutes

### 4.3 Verify Deployment
- Check the Amplify-provided URL
- Test custom domain once DNS propagates
- Verify all pages load correctly

## Step 5: Performance Optimization

### 5.1 CloudFront CDN
- Amplify automatically uses CloudFront
- Global CDN for fast loading
- Edge locations worldwide

### 5.2 Caching
- Static assets cached at edge
- HTML pages cached for 1 hour
- Images and CSS cached for 1 year

### 5.3 Compression
- Gzip compression enabled
- Automatic asset optimization
- Image optimization available

## Step 6: Monitoring and Analytics

### 6.1 Build Monitoring
- Build logs in Amplify console
- Error tracking and debugging
- Performance metrics

### 6.2 Custom Analytics
- Google Analytics integration
- Custom event tracking
- Performance monitoring

## Troubleshooting

### Common Issues

#### Build Fails
```bash
# Check build logs in Amplify console
# Common fixes:
# 1. Update Node.js version
# 2. Clear cache and rebuild
# 3. Check environment variables
```

#### Domain Not Working
```bash
# Check DNS propagation
nslookup vallaroo.com
nslookup www.vallaroo.com

# Verify DNS records in Route 53
# Wait for DNS propagation (up to 48 hours)
```

#### SSL Certificate Issues
```bash
# Check certificate status in ACM
# Verify domain ownership
# Ensure DNS records are correct
```

## Cost Estimation

### Free Tier (12 months)
- 1,000 build minutes/month
- 5GB storage
- 15GB data transfer
- Custom domains
- SSL certificates

### After Free Tier
- Build: $0.01/minute
- Storage: $0.023/GB/month
- Data transfer: $0.15/GB
- **Estimated cost: $5-10/month**

## Security Features

### Automatic Security
- HTTPS enforcement
- Security headers
- DDoS protection
- WAF integration available

### Custom Headers
```yaml
# Add to amplify.yml if needed
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Strict-Transport-Security = "max-age=31536000"
```

## Support

- AWS Amplify Documentation
- AWS Support (if on paid plan)
- Community forums
- GitHub issues

## Next Steps

1. Deploy to Amplify
2. Configure custom domain
3. Set up monitoring
4. Optimize performance
5. Set up CI/CD pipeline

Your Vallaroo landing page will be live at `https://vallaroo.com` once deployed!
