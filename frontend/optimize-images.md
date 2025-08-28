# Image Optimization Guide

## Current Image Sizes (Too Large for GitHub)
- G 3.png: 8.6MB ❌
- G 2.png: 11MB ❌  
- D 3.png: 7.9MB ❌
- DSC02969.png: 4.1MB ⚠️
- DSC02973.png: 3.8MB ⚠️

## Recommended Actions:

### 1. Optimize Images Online
Use these free tools to compress your images:
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **Compressor.io**: https://compressor.io/

### 2. Target File Sizes
- **Product Images**: Keep under 1MB each
- **Logo**: Keep under 100KB
- **Total**: Aim for under 10MB total for all images

### 3. Image Formats
- Convert PNG to WebP for better compression
- Use JPG for photos
- Use PNG only for logos/transparent images

### 4. Quick Fix Steps:
1. Download images from your current folder
2. Upload to TinyPNG.com
3. Download optimized versions
4. Replace original files
5. Commit and push to GitHub

## Alternative: Use Git LFS
If you need to keep large images:

```bash
# Install Git LFS
git lfs install

# Track large files
git lfs track "*.png"
git lfs track "*.jpg"

# Add .gitattributes
git add .gitattributes

# Add and commit files
git add .
git commit -m "Add large images with Git LFS"
git push
```
