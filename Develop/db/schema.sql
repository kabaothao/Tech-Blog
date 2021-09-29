-- DROP DATABASE
DROP DATABASE IF EXISTS Tech_Blog;

-- CREATE DATABASE
CREATE DATABASE Tech_Blog;

-------------------
---SCHEMA SCRIPT---
-------------------

CREATE Database Tech_Blog;

CREATE TABLE User
(
  Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  Username VARCHAR(255),
  Password VARCHAR(255) --Needs to be encrypted
);

CREATE TABLE Blog
(
  Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  Title VARCHAR(255),
  Content VARCHAR(MAX),
  User_Id INT,
  FOREIGN KEY User_Id REFERENCES User(Id),
  InsertDate DATETIME
);

CREATE TABLE Comment
(
  Id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  Content VARCHAR(MAX),
  User_Id INT,
  FOREIGN KEY User_Id REFERENCES User(Id),
  Blog_Id INT,
  FOREIGN KEY Blog_Id REFERENCES Blog(Id),
  InsertDate DATETIME
);

SELECT b.Title, b.Content, b.InsertDate, u.Username
FROM Blog b
JOIN User u ON u.Id = b.User_Id

SELECT c.Content, u.Username, c.InsertDate
FROM Comment c
JOIN User u ON u.Id = c.User_Id
JOIN Blog b ON b.Id = c.Blog_Id AND b.Id = 1
ORDER BY c.InsertDate DESC
