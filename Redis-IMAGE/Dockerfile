# Use an existing docker image as base


FROM alpine


# Download and install dependency

RUN apk add --update redis
RUN apk add --update gcc


# Tell image what to to when it starts as conteiner

CMD  ["redis-server"]

