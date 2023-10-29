# Use an official Nginx image as the base
FROM nginx:latest

# Remove the default Nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy the contents of the current directory into the container
COPY . /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# just for fun in the 