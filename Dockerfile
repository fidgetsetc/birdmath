# 1. Use an official Nginx image as the base
FROM nginx:alpine

# 2. Copy your static files from your project folder to the Nginx html folder
# (Assuming your files are in a folder called 'dist' or 'public'. 
# If your files are in the root, just use COPY . /usr/share/nginx/html)
COPY . /usr/share/nginx/html

# 3. Expose port 80 (default for web traffic)
EXPOSE 80

# 4. Nginx starts automatically, so you don't even need a CMD!
