# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.6.21)
# Database: thanos
# Generation Time: 2015-01-09 18:43:36 +0000
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
  `postid` int(11) DEFAULT NULL,
  `comment` longtext,
  `timestamp` datetime DEFAULT NULL,
  `remote_address` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;

INSERT INTO `comments` (`id`, `postid`, `comment`, `timestamp`, `remote_address`)
VALUES
	(1,4,'Fusce augue nulla, ultrices sit amet vehicula nec, volutpat sed sapien. Vivamus a lobortis metus. Suspendisse vel sem non dolor vulputate vulputate id eget purus. ','2015-01-09 18:42:18','127.0.0.1');

/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table names
# ------------------------------------------------------------

DROP TABLE IF EXISTS `names`;

CREATE TABLE `names` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(100) DEFAULT NULL,
  `value` char(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

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
  `comments` int(100) DEFAULT '0',
  `category` char(200) DEFAULT NULL,
  `username` char(200) DEFAULT NULL,
  `createdat` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `hashtag` longtext,
  `isSpam` int(100) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `posts`, `views`, `comments`, `category`, `username`, `createdat`, `status`, `hashtag`, `isSpam`)
VALUES
	(1,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, nunc eget porta semper, dolor arcu varius odio, quis sagittis velit justo id augue. Nam in tempor ex. Donec augue mi, cursus quis tellus ac, pharetra dictum nibh. Etiam commodo urna sed tincidunt aliquam. Curabitur non leo vulputate massa condimentum ornare et eget orci. Nulla condimentum tortor a ante ullamcorper elementum. Aenean fermentum lobortis commodo. Nunc fringilla eros lacus. Nulla facilisi. Vestibulum consequat urna at neque venenatis pharetra. Mauris sodales fringilla magna quis tristique. Nam non maximus nisi, iaculis eleifend ex. Integer cursus, augue in tempus luctus, ligula tellus vulputate orci, a ullamcorper felis elit in orci.',NULL,0,'FMYLIFE','NEPHRITIS','2015-01-09 18:41:04',1,'',0),
	(2,'Nam sodales tellus ut bibendum dictum. Vivamus porttitor, nisi a eleifend fringilla, quam sapien ultricies lacus, eget gravida massa orci vitae ex. Etiam pulvinar pharetra dui, sed convallis quam. Sed sodales congue rutrum. Aliquam nulla massa, finibus in enim sit amet, fringilla lobortis nisi. Nam in mi eget arcu pulvinar sodales eu et sem. Cras sodales lectus non nisi lobortis vestibulum. Maecenas tempus, ex quis auctor maximus, mauris lorem sagittis ante, nec porttitor libero sapien ut justo. Sed non facilisis risus, et facilisis dui. Cras dolor odio, bibendum a massa et, lobortis commodo odio. Suspendisse congue dui purus, ac euismod urna molestie eget. Praesent nunc est, finibus in nulla et, pulvinar mattis turpis',NULL,0,'stwrldprbl','SILVER','2015-01-09 18:41:24',1,'',0),
	(3,'Fusce augue nulla, ultrices sit amet vehicula nec, volutpat sed sapien. Vivamus a lobortis metus. Suspendisse vel sem non dolor vulputate vulputate id eget purus. Sed eu elementum turpis. Aenean elementum faucibus erat, ut venenatis mi euismod non. Ut condimentum luctus eros, non interdum mauris ullamcorper vel. Sed pretium lectus sed eros pharetra, sit amet efficitur mi eleifend. Pellentesque varius a orci et molestie. Nullam tristique ornare consequat. Etiam egestas ac lorem in vehicula. Cras volutpat placerat urna vel facilisis. Morbi eu rhoncus lorem.',NULL,0,'justcase','CONCRETE','2015-01-09 18:41:37',1,'',0),
	(4,'In quis nibh id urna eleifend auctor a non tortor. Aliquam vel facilisis purus. Donec non accumsan dolor, a ullamcorper enim. Nam fermentum faucibus lacus, vel ornare massa faucibus non. Integer sed lacus porttitor, suscipit arcu ac, finibus erat. Morbi ultricies mi eros, pulvinar feugiat tortor porttitor at. Etiam fringilla condimentum nibh quis consectetur. Nullam ut felis neque. Fusce rutrum nisl eget lacinia sollicitudin. Morbi ultricies magna vel neque facilisis, nec lobortis dui mollis. Proin tincidunt rutrum augue, vitae sagittis urna posuere sed.',NULL,1,'FMYLIFE','PURPLE','2015-01-09 18:41:54',1,'',1);

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

LOCK TABLES `spam` WRITE;
/*!40000 ALTER TABLE `spam` DISABLE KEYS */;

INSERT INTO `spam` (`id`, `post_id`, `user_ip`, `timestamp`, `comments`, `actioned`)
VALUES
	(1,4,'127.0.0.1','2015-01-09 18:42:55',NULL,NULL);

/*!40000 ALTER TABLE `spam` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `remote_address` varchar(200) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `httpx_forward` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `remote_address`, `post_id`, `httpx_forward`)
VALUES
	(1,'127.0.0.1',1,NULL),
	(2,'127.0.0.1',2,NULL),
	(3,'127.0.0.1',3,NULL),
	(4,'127.0.0.1',4,NULL);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
