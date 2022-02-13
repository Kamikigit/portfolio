FROM node:16-alpine as builder

WORKDIR /usr/src/app
COPY ./node/app/react-sample/ ./
RUN npm install
ENV PATH ./node/app/react-sample/node_modules/.bin:$PATH
RUN npm run build

FROM fholzer/nginx-brotli:v1.12.2
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /usr/src/app/build .
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
# docker compose build
# docker compose run --rm node sh -c "npm install -g create-react-app && create-react-app react-sample"
# docker compose