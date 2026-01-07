
from PIL import Image
import os

input_path = "C:/Users/JOSE/Desktop/P.Inmobilaria/public/images/blog/cosmetic-flip-raw.jpg"
output_path = "C:/Users/JOSE/Desktop/P.Inmobilaria/public/images/blog/cosmetic-flip-v3.jpg"

try:
    with Image.open(input_path) as img:
        width, height = img.size
        # The watermark is typically in the bottom right.
        # We'll crop a small strip from the bottom to be safe and clean.
        # AI watermarks (Google/Gemini) are usually in the bottom right corner area.
        # Let's crop the bottom 50 pixels (or 5% if smaller) which usually contains the strip.
        
        # Check dimensions
        print(f"Original size: {width}x{height}")
        
        # Crop bottom 60 pixels to strictly remove watermark strip
        new_height = height - 60
        
        # Perform crop
        cropped_img = img.crop((0, 0, width, new_height))
        
        # Save
        cropped_img.save(output_path, quality=95)
        print(f"Saved processed image to {output_path}. New size: {width}x{new_height}")

except Exception as e:
    print(f"Error processing image: {e}")
