FROM node:16-alpine

#kamikiを追加
# ARG USERNAME=kamiki
# ARG UID=1000
# -m:ホームディレクトリ作成, -s:ログインシェル指定
# RUN useradd -m -s /bin/bash -u $UID $USERNAME
# USER $USERNAME
COPY ./node/app/react-sample/* .
WORKDIR /usr/src/app
CMD ["npm", "start"]
# docker compose build
# docker compose run --rm node sh -c "npm install -g create-react-app && create-react-app react-sample"
# docker compose