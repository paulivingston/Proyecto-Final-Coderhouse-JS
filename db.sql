CREATE DATABASE stock;

USE stock;

-- USERS TABLE
CREATE TABLE mps(
    mp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    mp_name VARCHAR(16) NOT NULL,
    mp_prov VARCHAR (60) NOT NULL,
    mp_stock INT NOT NULL
);

DESCRIBE mps;

SELECT * FROM mps;

