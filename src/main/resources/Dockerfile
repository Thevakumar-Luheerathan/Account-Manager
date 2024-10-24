FROM postgres:latest

ENV POSTGRES_DB=accountdb
ENV POSTGRES_USER=luhee
ENV POSTGRES_PASSWORD=luheerathan

EXPOSE 5432

COPY init.sql /docker-entrypoint-initdb.d/

VOLUME ["/var/lib/postgresql/data"]
