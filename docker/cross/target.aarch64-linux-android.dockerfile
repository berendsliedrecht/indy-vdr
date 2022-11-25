FROM ghcr.io/cross-rs/aarch64-linux-android:latest

RUN dpkg --add-architecture arm64 
RUN apt-get update
RUN apt-get install --assume-yes libzmq3-dev:arm64
