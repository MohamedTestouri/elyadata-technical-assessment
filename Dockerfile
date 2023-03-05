# Use an official Node.js runtime as a parent image
FROM node:14.16.0-alpine3.13

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Expose port 80 for the container
EXPOSE 80

# Start the Angular app when the container starts
CMD ["npm", "run", "start"]
