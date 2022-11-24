FROM ghcr.io/cross-rs/armv7-linux-androideabi:latest

RUN apt-get update
RUN apt-get install --assume-yes libzmq3-dev 
