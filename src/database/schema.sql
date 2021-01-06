use sellapp;

-- Users Table 
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(30),
  password varchar(255),
  lastLogin int NOT NULL DEFAULT 0,
  isActive tinyint DEFAULT 1,
  created_at datetime DEFAULT now(),
  PRIMARY KEY (id)
) 
ENGINE = InnoDB;

-- Shops Table
CREATE TABLE shops (
  id int NOT NULL AUTO_INCREMENT,
  userId int,
  name varchar(25),
  isActive tinyint DEFAULT 1,
  created_at datetime DEFAULT now(),
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
) 
ENGINE = InnoDB;

-- Shop Address table 
CREATE TABLE shopAddress (
  id int NOT NULL AUTO_INCREMENT,
  shopId int,
  address varchar(40),
  city varchar(25),
  state varchar(15),
  country varchar(15),
  postalCode int,
  isActive tinyint DEFAULT 1,
  created_at datetime DEFAULT now(),
  PRIMARY KEY (id),
  FOREIGN KEY (shopId) REFERENCES shops(id)
) 
ENGINE = InnoDB;


-- Products Table
CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  shopId int,
  name varchar(25),
  label varchar(25),
  labelColor varchar(10),
  amount int,
  remStock int,
  totalStock int,
  isActive tinyint DEFAULT 1,
  created_at datetime DEFAULT now(),
  PRIMARY KEY (id),
  FOREIGN KEY (shopId) REFERENCES shops(id)
) 
ENGINE = InnoDB;

-- Sells Table
CREATE TABLE sells (
  id int NOT NULL AUTO_INCREMENT,
  shopId int,
  name varchar(25),
  skus varchar(25),
  description varchar(10),
  amount int,
  isPaid tinyint default 0,
  due int,
  isActive tinyint DEFAULT 1,
  created_at datetime DEFAULT now(),
  PRIMARY KEY (id),
  FOREIGN KEY (shopId) REFERENCES shops(id)
) 
ENGINE = InnoDB;

-- Sells Table
CREATE TABLE sellProductList (
  id int NOT NULL AUTO_INCREMENT,
  sellId int,
  productId int,
  PRIMARY KEY (id),
  FOREIGN KEY (sellId) REFERENCES sells(id),
  FOREIGN KEY (productId) REFERENCES products(id)
) 
ENGINE = InnoDB;
