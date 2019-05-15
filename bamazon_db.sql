CREATE DATABASE IF NOT EXISTS bamazon_db;
USE bamazon_db;

CREATE TABLE IF NOT EXISTS products (
  item_id INTEGER(100) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30),
  department_name VARCHAR(30),
  price DECIMAL(8,2) NOT NULL,
  stock_quantity INTEGER(100),
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "EGR Delete Kit", "Parts", 199.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Exhaust System", "Parts", 699.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Tuner & Monitor", "Parts", 599.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Cold Air Intake", "Parts", 399.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Radiator", "Parts", 999.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Dual Steering Stabilizer", "Parts", 447.37, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Leveling Kit", "Parts", 521.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Rear Shock", "Parts", 73.06, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Front Bumper", "Parts", 960.22, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Winch", "Parts", 548.49, 100);