FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY . .
# ENV PORT 80
# ENV HOST 0.0.0.0
# USER 0w
# EXPOSE 80
