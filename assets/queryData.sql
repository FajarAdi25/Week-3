CREATE TABLE users (
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  image VARCHAR(255) NULL,
);


CREATE TABLE food_recipes (
  recipes_id SERIAL PRIMARY KEY,
  name_recipes VARCHAR(255) NOT NULL,
  image VARCHAR (255),
  ingredients TEXT NOT NULL,
  video VARCHAR NULL,
  name_video VARCHAR(255),
  users_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);