# Use an official Nginx image as the base
FROM nginx:latest

# Remove the default Nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy the entire "Cyberwise" directory into the container
COPY /CYBERWISE /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80
