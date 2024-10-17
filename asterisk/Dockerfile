FROM ubuntu:latest

RUN apt-get update && apt-get install build-essential -y

COPY . /app

WORKDIR /app

RUN ./contrib/scripts/install_prereq install

RUN ./configure

RUN make

RUN make install

CMD ["asterisk", "-vvvc"]
