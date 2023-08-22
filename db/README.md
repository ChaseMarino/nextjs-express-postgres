To run 

only requirement is Docker desktop

docker build . -t testdb

docker run -p 5432:5432 testdb

server can then be accessed locally on port 5432, with credentials

ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD pass
ENV POSTGRES_DB db

