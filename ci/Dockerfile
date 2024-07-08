FROM oven/bun:latest

COPY *.js package.json ./
RUN bun install

ENV IMG_DIR=/images \
    CMD_DIR=/commands

CMD IMG_DIR=${IMG_DIR} \
    CMD_DI=${CMD_DIR} \
    bun start