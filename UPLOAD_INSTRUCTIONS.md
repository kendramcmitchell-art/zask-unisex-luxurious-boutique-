# How to Upload Your Product Images

## Step 1: Prepare Your Images
- Take clear, high-quality photos of your products
- Name them clearly: `product-1.jpg`, `product-2.jpg`, etc.
- Recommended sizes: 300x400 pixels (or larger, they'll resize automatically)
- Supported formats: JPG, PNG, GIF

## Step 2: Upload Images to GitHub

### Method 1: Using GitHub Web Interface (EASIEST)
1. Go to your repository: https://github.com/kendramcmitchell-art/zask-unisex-luxurious-boutique-
2. Click the `images` folder
3. Click the `products` folder
4. Click "Add file" → "Upload files"
5. Drag and drop your product photos
6. Click "Commit changes"

### Method 2: Using Git Command Line
```bash
cd zask-unisex-luxurious-boutique-
cp /path/to/your/images/product-*.jpg images/products/
git add images/products/
git commit -m "Add product images"
git push origin main
```

## Step 3: View Your Website Live

Your website is now live at:
```
https://kendramcmitchell-art.github.io/zask-unisex-luxurious-boutique-/
```

Once you upload images, they'll appear automatically on:
- Home page: `https://kendramcmitchell-art.github.io/zask-unisex-luxurious-boutique-/`
- Products page: `https://kendramcmitchell-art.github.io/zask-unisex-luxurious-boutique-/products.html`

## Tips for Better Results

- Use consistent lighting for product photos
- Show items from multiple angles
- Include size comparison (show item on a person)
- Keep file sizes reasonable (under 1MB each)
- Use descriptive filenames: `silk-shirt-front.jpg`, `blazer-detail.jpg`

## Troubleshooting

**Images don't appear?**
- Check that files are in `images/products/` folder
- Verify filenames match exactly in HTML
- Wait 1-2 minutes for GitHub to rebuild
- Check browser console (F12) for errors

**Need to add more products?**
- Create more product cards in `products.html`
- Upload more images to `images/products/`
- Update the image filenames to match