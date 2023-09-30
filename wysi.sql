create user 'example'@'localhost' identified by 'password';

create or replace database wysi;

GRANT ALL PRIVILEGES ON wysi.* TO 'example'@'localhost';

use wysi;

DROP TABLE IF EXISTS `ranks`;

CREATE TABLE `ranks` (
  `id` int NOT NULL,
  `time` int NOT NULL,
  `osu` int DEFAULT NULL,
  `taiko` int DEFAULT NULL,
  `fruits` int DEFAULT NULL,
  `mania` int DEFAULT NULL,
  `type` varchar(7) NOT NULL,
  UNIQUE KEY `uniqueUser` (`id`,`time`,`type`)
);

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(15) NOT NULL,
  `language` varchar(4) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
);