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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;

INSERT INTO `comments` (`id`, `postid`, `comment`, `timestamp`, `remote_address`)
VALUES
	(1,1,'testing 1','2014-12-17 14:30:45','127.0.0.1'),
	(2,1,'BAAAAAAAAAA','2014-12-17 14:43:04','127.0.0.1'),
	(3,2,'you not freak you are an idiot','2014-12-17 14:43:18','127.0.0.1'),
	(4,1,'blah','2014-12-18 20:20:13','127.0.0.1');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `posts`, `views`, `comments`, `category`, `username`, `createdat`, `status`, `hashtag`)
VALUES
	(1,'testing',NULL,3,'FMYLIFE','SUN-FLOWER','2014-12-17 14:30:29',1,''),
	(2,'I\'m Superfreak, yeah baby #superFreak',NULL,1,'justcase','BLUE','2014-12-17 14:42:33',1,'superFreak'),
	(3,'Adding another post #sexystuff yeaah hun',NULL,0,'FMYLIFE','SUN-FLOWER','2014-12-17 14:42:48',1,'sexystuff'),
	(4,'eee',NULL,0,'FMYLIFE','WET-ASPHALT','2014-12-19 09:26:10',1,'');

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
	(1,1,'127.0.0.1','2014-12-18 20:20:21',NULL,NULL);

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



