CREATE DATABASE memorybee;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE users(
  user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255),
  username VARCHAR(255),
  password TEXT
);

CREATE TABLE words(
  word TEXT PRIMARY KEY,
  examples TEXT[]
);

CREATE TABLE user_word_relation(
  user_id UUID NOT NULL,
  word TEXT NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (word) REFERENCES words(word),
  UNIQUE(user_id, word)
);

-- INSERT INTO users(email, username, password) 
--   VALUES('email1', 'name1', 'pass1');

-- INSERT INTO words(word, examples) 
-- VALUES('test', ARRAY ['this is a test', 'i love tests']);

-- INSERT INTO 