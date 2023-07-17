# Use node 16 alpine as base image
FROM node:16-alpine

# Define working directory
WORKDIR /app

# Define environment variable
ENV PORT=3000

# Copy package.json and package-lock.json to workdir
COPY ["package.json", "package-lock.json*", "./"]

# Install dependencies
RUN npm install

# Copy all files in current folder to workdir (app)
COPY . .

# Run npm start
CMD ["npm", "start"]