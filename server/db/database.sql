CREATE DATABASE memorybee;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255),
  username VARCHAR(255),
  password TEXT
);

CREATE TABLE words (
  word TEXT PRIMARY KEY,
  user_id UUID,
  definition TEXT[],
  examples TEXT[]
  -- next_review DATE NOT NULL DEFAULT CURRENT_DATE
);
