# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.6.21)
# Database: thanos
# Generation Time: 2014-11-11 20:36:24 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table comments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `posts_id` int(11) DEFAULT NULL,
  `comment` int(11) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table names
# ------------------------------------------------------------

DROP TABLE IF EXISTS `names`;

CREATE TABLE `names` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(100) DEFAULT NULL,
  `value` char(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `names` WRITE;
/*!40000 ALTER TABLE `names` DISABLE KEYS */;

INSERT INTO `names` (`id`, `name`, `value`)
VALUES
	(1,'TURQUOISE','#1abc9c'),
	(2,'EMERALD','#2ecc71'),
	(3,'AMETHYST','#9b59b6'),
	(4,'WET-ASPHALT','#34495e'),
	(5,'GREEN-SEA','#16a085'),
	(6,'NEPHRITIS','#27ae60'),
	(7,'BELIZE-HOLE','#2980b9'),
	(8,'WISTERIA','#8e44ad'),
	(9,'MIDNIGHT-BLUE','#2c3e50'),
	(10,'SUN-FLOWER','#f1c40f'),
	(11,'CARROT','#e67e22'),
	(12,'ALIZARIN','#e74c3c'),
	(13,'CLOUDS','#ecf0f1'),
	(14,'CONCRETE','#95a5a6'),
	(15,'ORANGE','#f39c12'),
	(16,'PUMPKIN','#d35400'),
	(17,'POMEGRANATE','#c0392b'),
	(18,'SILVER','#bdc3c7'),
	(19,'ASBESTOS','#7f8c8d'),
	(20,'RED','#FF0000'),
	(21,'GREEN','#00FF00'),
	(22,'BLUE','#000099'),
	(23,'PURPLE','#CC0099'),
	(24,'BROWN','#993300'),
	(25,'PINK','#FF3399'),
	(26,'aquamarine','#7fffd4'),
	(27,'BlueViolet','#8a2be2'),
	(28,'burlywood','#deb887'),
	(29,'chocolate','#d2691e'),
	(30,'DarkKhaki','#bdb76b'),
	(31,'DarkSalmon','#e9967a');

/*!40000 ALTER TABLE `names` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `posts` longtext,
  `views` int(200) DEFAULT NULL,
  `comment_id` int(100) DEFAULT NULL,
  `category` char(200) DEFAULT NULL,
  `username` char(200) DEFAULT NULL,
  `createdat` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `hashtag` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `posts`, `views`, `comment_id`, `category`, `username`, `createdat`, `status`, `hashtag`)
VALUES
	(1,'I\'m a #Superfreak a superfreak, watch it baby girl! #coolDude',NULL,NULL,'FMYLIFE','BLUE','2014-11-11 18:54:12',1,'Superfreak,coolDude'),
	(2,'Testing another #superfreak post , cause this is #raw baby',NULL,NULL,'FMYLIFE','CLOUDS','2014-11-11 18:54:34',1,'superfreak,raw'),
	(3,'I\'m getting a random #name #raw shit',NULL,NULL,'FMYLIFE','CONCRETE','2014-11-11 18:55:00',1,'name,raw');

/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table spam
# ------------------------------------------------------------

DROP TABLE IF EXISTS `spam`;

CREATE TABLE `spam` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `user_ip` varchar(200) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `comments` longtext,
  `actioned` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `remote_address` varchar(200) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `httpx_forward` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `remote_address`, `post_id`, `httpx_forward`)
VALUES
	(1,'127.0.0.1',1,NULL),
	(2,'127.0.0.1',2,NULL),
	(3,'127.0.0.1',3,NULL);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
