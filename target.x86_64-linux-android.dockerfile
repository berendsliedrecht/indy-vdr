FROM ghcr.io/cross-rs/aarch64-unknown-linux-gnu:latest


RUN echo "hello"
RUN apt-get update
RUN apt-get install --assume-yes libzmq3-dev 
