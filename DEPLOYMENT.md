# Deployment Guide

This project is configured to deploy to AWS using GitHub Actions.

## Infrastructure

- **S3 Bucket**: `nidan.ascendons.com`
- **CloudFront Distribution**: `E1BPX5BCA37I25`
- **Domain**: `https://nidan.ascendons.com`
- **Region**: `us-east-1`

## GitHub Actions Deployment

### Prerequisites

You need to configure the following GitHub Secrets in your repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following:

#### Required Secrets:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `AWS_ACCESS_KEY_ID` | AWS Access Key ID | Create an IAM user with S3 and CloudFront permissions |
| `AWS_SECRET_ACCESS_KEY` | AWS Secret Access Key | Generated when creating the IAM user |

### IAM Permissions Required

The IAM user needs the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::nidan.ascendons.com",
        "arn:aws:s3:::nidan.ascendons.com/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation",
        "cloudfront:ListInvalidations"
      ],
      "Resource": "arn:aws:cloudfront::996099991463:distribution/E1BPX5BCA37I25"
    }
  ]
}
```

### How to Deploy

#### Method 1: GitHub UI (Recommended)

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. Select **Deploy to AWS** workflow from the left sidebar
4. Click **Run workflow** button
5. Select the branch and environment (production)
6. Click **Run workflow**

#### Method 2: GitHub CLI

```bash
gh workflow run deploy.yml
```

### Monitoring Deployment

1. Watch the workflow progress in the **Actions** tab
2. Check the logs for each step
3. Once complete, visit https://nidan.ascendons.com
4. CloudFront invalidation may take 1-5 minutes to propagate

## Local Deployment (Manual)

If you prefer to deploy manually from your local machine:

```bash
# Build the application
cd frontend
npm run build

# Deploy to S3
aws s3 sync out/ s3://nidan.ascendons.com/ \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html"

aws s3 sync out/ s3://nidan.ascendons.com/ \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "*" \
  --include "*.html"

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id E1BPX5BCA37I25 \
  --paths "/*"
```

## Troubleshooting

### Deployment fails with 403 error
- Check that the IAM user credentials are correct in GitHub Secrets
- Verify the IAM user has the required permissions

### Changes not visible on the website
- Wait 1-5 minutes for CloudFront invalidation to complete
- Check CloudFront invalidation status:
  ```bash
  aws cloudfront list-invalidations --distribution-id E1BPX5BCA37I25
  ```
- Clear your browser cache (Cmd/Ctrl + Shift + R)

### DNS not resolving
- DNS propagation can take up to 48 hours (usually much faster)
- Check DNS with: `dig nidan.ascendons.com`
- Verify Route53 records are configured correctly

## Architecture

```
┌─────────────┐
│   GitHub    │
│   Actions   │
└──────┬──────┘
       │ Build & Deploy
       ▼
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│     S3      │────▶│  CloudFront  │────▶│   Route53   │
│   Bucket    │     │ Distribution │     │     DNS     │
└─────────────┘     └──────────────┘     └─────────────┘
                            │
                            ▼
                    nidan.ascendons.com
```

## Support

For issues with:
- **AWS Infrastructure**: Check AWS Console (S3, CloudFront, Route53)
- **GitHub Actions**: Check Actions tab in GitHub repository
- **Application Build**: Check Next.js build logs locally
