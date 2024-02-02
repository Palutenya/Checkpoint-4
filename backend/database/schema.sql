USE checkpoint_4;

CREATE TABLE `user`
(
    id       INT AUTO_INCREMENT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) UNIQUE             NOT NULL,
    email    VARCHAR(255) UNIQUE            NOT NULL,
    password VARCHAR(255) UNIQUE            NOT NULL
);