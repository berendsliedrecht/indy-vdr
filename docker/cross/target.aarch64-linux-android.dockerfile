FROM ghcr.io/cross-rs/aarch64-linux-android:latest

RUN apt-get update
RUN dpkg --add-architecture arm64 
RUN apt-get install --assume-yes libzmq3-dev
