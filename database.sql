CREATE DATABASE blog;

CREATE TABLE articles(
    _id SERIAL PRIMARY KEY,
    title VARCHAR,
    content VARCHAR,
    timestamp timestamp default current_timestamp,
    img VARCHAR,
    author_id INT,
    comments VARCHAR[],
    slug VARCHAR,
    category_id INT
);

CREATE TABLE categories(
    _id SERIAL PRIMARY KEY,
    title VARCHAR,
    slug VARCHAR
);

CREATE TABLE users(
    _id SERIAL PRIMARY KEY,
    username VARCHAR,
    avatar VARCHAR,
    firstname VARCHAR,
    lastname VARCHAR,
    email VARCHAR,
    password VARCHAR,
    timestamp timestamp default current_timestamp
);


