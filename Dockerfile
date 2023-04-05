FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY . .
USER 0
EXPOSE 80
