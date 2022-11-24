FROM ghcr.io/cross-rs/x86_64-linux-android:latest

RUN apt-get update
RUN apt-get install --assume-yes libzmq3-dev 
