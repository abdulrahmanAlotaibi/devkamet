FROM ubuntu:18.04
MAINTAINER Abdulrahman Alotaibi

# Updates the package lists for upgrades
RUN apt-get update -y
RUN apt-get install curl vim sudo build-essential -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
# This is called 'build-essentials' : metapackage that install many other packages such as g++
# RUN apt-get install curl vim sudo build-essential 


# Install compilers
RUN apt-get install -y gcc
RUN apt-get install -y g++
RUN apt-get install -y ruby
RUN apt-get install -y python
RUN apt-get install -y nodejs

## for apt to be non-interactive
ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN true

RUN apt-get install -y php7.2
# RUN apt-get install -y npm
RUN apt-get install -y golang-go	
RUN apt-get install -y scala


RUN apt-get install -y gobjc

# Praparing testing frameworks
RUN apt-get install -y git
RUN apt-get install -y python-pip
RUN pip install pytest-json-report --upgrade
RUN npm install mocha -g

RUN useradd -ms /bin/bash newuser
USER newuser
COPY /scripts /runner
RUN npm i
WORKDIR /usercode

RUN echo "Image Building has been successful: sandbox"