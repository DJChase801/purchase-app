# Use an official Node.js image as the base image
FROM node:18.15.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3001 for the development server
EXPOSE 3001

# Command to start the development server
CMD ["npm", "run", "dev"]
