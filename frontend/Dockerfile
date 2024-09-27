# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy application files
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Start the Next.js application in development mode
CMD ["yarn", "dev"]
