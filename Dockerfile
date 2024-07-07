FROM node:lts-alpine
# ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 3005

USER node
CMD ["npm", "app.js"]
