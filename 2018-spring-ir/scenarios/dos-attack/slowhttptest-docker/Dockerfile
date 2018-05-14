FROM debian:jessie

RUN apt-get -y update && apt-get install -y \
        wget        \
        g++         \
        libssl-dev  \
        make

WORKDIR /tmp

RUN wget https://github.com/shekyan/slowhttptest/archive/v1.7.tar.gz
RUN tar xzf v1.7.tar.gz
WORKDIR slowhttptest-1.7

RUN mkdir /slowhttptest
RUN ./configure --prefix=/slowhttptest
RUN make && make install

CMD ["/tmp/slowhttptest-1.7/src/slowhttptest"]


FROM debian:jessie-slim

LABEL maintainer "mas9612 <mas9612@gmail.com>"

RUN apt-get -y update && apt-get install -y libssl-dev
RUN mkdir /slowhttptest
WORKDIR /slowhttptest
COPY --from=0 /tmp/slowhttptest-1.7/src/slowhttptest .
ENTRYPOINT ["./slowhttptest"]
