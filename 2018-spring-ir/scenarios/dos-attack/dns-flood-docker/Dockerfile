FROM debian:jessie

RUN apt-get -y update && apt-get install -y \
        wget    \
        git     \
        make    \
        gcc

WORKDIR /tmp

RUN git clone --depth 1 https://github.com/fike/dns-flood.git
WORKDIR dns-flood
RUN make


FROM debian:jessie

LABEL maintainer "mas9612 <mas9612@gmail.com>"

RUN apt-get -y update

RUN mkdir /dnsflood
WORKDIR /dnsflood
COPY --from=0 /tmp/dns-flood/dnsflood .

ENTRYPOINT ["./dnsflood"]
CMD ["-h"]
