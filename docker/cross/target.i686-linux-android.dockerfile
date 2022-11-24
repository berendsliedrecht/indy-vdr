FROM ghcr.io/cross-rs/i686-linux-android:latest

RUN apt-get update
RUN apt-get install --assume-yes libzmq3-dev 
