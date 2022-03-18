# Dockerfile
FROM node:16  
  
LABEL maintainer="info@devpix.de"  
LABEL description="Demo for vue vite tailwind router and pinia"  
  
WORKDIR /app  
COPY package*.json ./  
RUN yarn install  
COPY . .  
  
VOLUME ["/app"]  
EXPOSE 3000  
CMD ["/bin/bash"]
