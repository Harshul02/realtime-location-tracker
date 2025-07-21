FROM node:20-alpine
# Set working directory inside the container
WORKDIR /realtime-location-tracker

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port your app runs on (update if it's not 3000)
# EXPOSE 3000

# Run the app
ENTRYPOINT ["node", "app.js"]