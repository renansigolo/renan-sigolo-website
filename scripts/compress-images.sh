# Convert all images in the projects folder to webp format

cd public/images/projects

for file in *; do
    cwebp -m 6 -resize 1024 640 "$file" -o "${file%.png}.webp"
done
