CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 email TEXT,
 created_at TIMESTAMP
);

CREATE TABLE projects(
 id SERIAL PRIMARY KEY,
 user_id INT,
 name TEXT,
 code TEXT
);