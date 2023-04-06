FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY . .
USER 0w
# EXPOSE 80
