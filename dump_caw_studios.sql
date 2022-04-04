-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: localhost    Database: caw_studios
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cinemas_list`
--

DROP TABLE IF EXISTS `cinemas_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cinemas_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cinemas_name` varchar(255) NOT NULL,
  `cities_id` int(11) NOT NULL,
  `creation_date` datetime DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `last_updated_by` varchar(150) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_cinemas_list_cities_id` (`cities_id`),
  CONSTRAINT `fk_cinemas_list_cities_id` FOREIGN KEY (`cities_id`) REFERENCES `cities_list` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemas_list`
--

LOCK TABLES `cinemas_list` WRITE;
/*!40000 ALTER TABLE `cinemas_list` DISABLE KEYS */;
INSERT INTO `cinemas_list` VALUES (1,'PVR Rivoli- CP,Delhi',1,'2022-04-02 17:53:31','2022-04-02 17:53:31','root@localhost',0),(2,'Liberty Cinema',1,'2022-04-02 17:53:31','2022-04-02 17:53:31','root@localhost',0),(3,'Metro INOX Cinema',2,'2022-04-02 17:54:55','2022-04-02 17:54:55','root@localhost',0),(4,'PVR Icon Cinemas - Versova',2,'2022-04-02 17:54:55','2022-04-02 17:54:55','root@localhost',0),(5,'New Empire Cinema',3,'2022-04-02 17:55:48','2022-04-02 17:55:48','root@localhost',0),(6,'Elite Cinema Hall',3,'2022-04-02 17:55:48','2022-04-02 17:55:48','root@localhost',0),(7,'City Pride Mangala Multiplex',4,'2022-04-02 17:58:59','2022-04-02 17:58:59','root@localhost',0),(8,'PVR ICON Pavilion Mall Pune',4,'2022-04-02 17:58:59','2022-04-02 17:58:59','root@localhost',0),(9,'PVR Rajajinagar-Orion Mall',5,'2022-04-02 17:59:44','2022-04-02 17:59:44','root@localhost',0),(10,'Vaibhav Theatre',5,'2022-04-02 17:59:44','2022-04-02 17:59:44','root@localhost',0),(11,'Jazz Cinemas LUXE',6,'2022-04-02 18:00:27','2022-04-02 18:00:27','root@localhost',0),(12,'AGS Cinemas',6,'2022-04-02 18:00:27','2022-04-02 18:00:27','root@localhost',0);
/*!40000 ALTER TABLE `cinemas_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER cinemas_list_insert_trigger BEFORE INSERT ON caw_studios.cinemas_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER cinemas_list_update_trigger BEFORE UPDATE ON caw_studios.cinemas_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `cities_list`
--

DROP TABLE IF EXISTS `cities_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city_name` varchar(255) NOT NULL,
  `creation_date` datetime DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `last_updated_by` varchar(150) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities_list`
--

LOCK TABLES `cities_list` WRITE;
/*!40000 ALTER TABLE `cities_list` DISABLE KEYS */;
INSERT INTO `cities_list` VALUES (1,'Delhi','2022-04-02 17:50:28','2022-04-02 17:50:28','root@localhost',0),(2,'Mumbai','2022-04-02 17:50:28','2022-04-02 17:50:28','root@localhost',0),(3,'Kolkata','2022-04-02 17:50:28','2022-04-02 17:50:28','root@localhost',0),(4,'Pune','2022-04-02 17:50:28','2022-04-02 17:50:28','root@localhost',0),(5,'Bengaluru','2022-04-02 17:50:28','2022-04-02 17:50:28','root@localhost',0),(6,'Chennai','2022-04-02 17:50:28','2022-04-02 17:50:28','root@localhost',0);
/*!40000 ALTER TABLE `cities_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER cities_list_insert_trigger BEFORE INSERT ON caw_studios.cities_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER cities_list_update_trigger BEFORE UPDATE ON caw_studios.cities_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `movies_cities_list`
--

DROP TABLE IF EXISTS `movies_cities_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_cities_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movies_id` int(11) NOT NULL,
  `cities_id` int(11) NOT NULL,
  `creation_date` datetime DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `last_updated_by` varchar(150) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_movies_cities_list_movies_id` (`movies_id`),
  KEY `fk_movies_cities_list_cities_id` (`cities_id`),
  CONSTRAINT `fk_movies_cities_list_cities_id` FOREIGN KEY (`cities_id`) REFERENCES `cities_list` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_movies_cities_list_movies_id` FOREIGN KEY (`movies_id`) REFERENCES `movies_list` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_cities_list`
--

LOCK TABLES `movies_cities_list` WRITE;
/*!40000 ALTER TABLE `movies_cities_list` DISABLE KEYS */;
INSERT INTO `movies_cities_list` VALUES (1,1,1,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(2,1,2,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(3,1,3,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(4,1,4,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(5,1,5,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(6,1,6,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(7,2,1,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(8,2,2,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(9,2,3,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(10,2,4,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(11,2,5,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(12,2,6,'2022-04-03 00:13:30','2022-04-03 00:13:30','root@localhost',0),(13,3,1,'2022-04-03 00:13:31','2022-04-03 00:13:31','root@localhost',0),(14,3,2,'2022-04-03 00:13:31','2022-04-03 00:13:31','root@localhost',0),(15,3,3,'2022-04-03 00:13:31','2022-04-03 00:13:31','root@localhost',0),(16,3,4,'2022-04-03 00:13:31','2022-04-03 00:13:31','root@localhost',0);
/*!40000 ALTER TABLE `movies_cities_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER movies_cities_list_insert_trigger BEFORE INSERT ON caw_studios.movies_cities_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER movies_cities_list_update_trigger BEFORE UPDATE ON caw_studios.movies_cities_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `movies_list`
--

DROP TABLE IF EXISTS `movies_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movies_name` varchar(255) NOT NULL,
  `creation_date` datetime DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `last_updated_by` varchar(150) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_list`
--

LOCK TABLES `movies_list` WRITE;
/*!40000 ALTER TABLE `movies_list` DISABLE KEYS */;
INSERT INTO `movies_list` VALUES (1,'Attack: Part 1','2022-04-03 00:00:46','2022-04-03 00:00:46','root@localhost',0),(2,'RRR','2022-04-03 00:00:46','2022-04-03 00:00:46','root@localhost',0),(3,'Bachchhan Paandey','2022-04-03 00:00:46','2022-04-03 00:00:46','root@localhost',0);
/*!40000 ALTER TABLE `movies_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER movies_list_insert_trigger BEFORE INSERT ON caw_studios.movies_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER movies_list_update_trigger BEFORE UPDATE ON caw_studios.movies_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `showtime_list`
--

DROP TABLE IF EXISTS `showtime_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `showtime_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movies_id` varchar(255) NOT NULL,
  `cinemas_id` int(11) NOT NULL,
  `show_date` date DEFAULT NULL,
  `show_time` datetime DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `last_updated_by` varchar(150) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `seat_avaibiltity` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `showtime_list`
--

LOCK TABLES `showtime_list` WRITE;
/*!40000 ALTER TABLE `showtime_list` DISABLE KEYS */;
INSERT INTO `showtime_list` VALUES (1,'1',1,'2022-04-03','2022-04-03 11:00:00','2022-04-02 23:50:35','2022-04-03 17:04:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(2,'1',1,'2022-04-03','2022-04-03 14:00:00','2022-04-02 23:51:44','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(3,'1',1,'2022-04-03','2022-04-03 18:00:00','2022-04-02 23:52:00','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(4,'1',2,'2022-04-03','2022-04-03 18:00:00','2022-04-02 23:52:16','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(5,'1',2,'2022-04-03','2022-04-03 15:00:00','2022-04-02 23:52:32','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(6,'1',2,'2022-04-03','2022-04-03 12:00:00','2022-04-02 23:52:45','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(7,'2',1,'2022-04-03','2022-04-03 00:00:00','2022-04-03 00:19:19','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(8,'2',1,'2022-04-03','2022-04-03 14:00:00','2022-04-03 00:19:19','2022-04-04 17:27:09','root@localhost',0,'[A3,A4,A5,A6]'),(9,'2',1,'2022-04-03','2022-04-03 18:00:00','2022-04-03 00:19:19','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(10,'2',2,'2022-04-03','2022-04-03 18:00:00','2022-04-03 00:19:19','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(11,'2',2,'2022-04-03','2022-04-03 15:00:00','2022-04-03 00:19:19','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(12,'2',2,'2022-04-03','2022-04-03 12:00:00','2022-04-03 00:19:19','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(13,'3',1,'2022-04-03','2022-04-03 11:00:00','2022-04-03 00:22:59','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(14,'3',1,'2022-04-03','2022-04-03 14:00:00','2022-04-03 00:22:59','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(15,'3',1,'2022-04-03','2022-04-03 18:00:00','2022-04-03 00:22:59','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(16,'3',3,'2022-04-03','2022-04-03 18:00:00','2022-04-03 00:22:59','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(17,'2',3,'2022-04-03','2022-04-03 15:00:00','2022-04-03 00:22:59','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]'),(18,'3',3,'2022-04-03','2022-04-03 12:00:00','2022-04-03 00:22:59','2022-04-03 16:43:14','root@localhost',0,'[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10]');
/*!40000 ALTER TABLE `showtime_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER showtime_list_insert_trigger BEFORE INSERT ON caw_studios.showtime_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER showtime_list_update_trigger BEFORE UPDATE ON caw_studios.showtime_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `user_booking_seat_list`
--

DROP TABLE IF EXISTS `user_booking_seat_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_booking_seat_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `showtime_id` int(11) NOT NULL,
  `seat_booked` text,
  `creation_date` datetime DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `last_updated_by` varchar(150) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_user_booking_seat_list_user_id` (`user_id`),
  KEY `fk_user_booking_seat_list_showtime_id` (`showtime_id`),
  CONSTRAINT `fk_user_booking_seat_list_showtime_id` FOREIGN KEY (`showtime_id`) REFERENCES `showtime_list` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user_booking_seat_list_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_booking_seat_list`
--

LOCK TABLES `user_booking_seat_list` WRITE;
/*!40000 ALTER TABLE `user_booking_seat_list` DISABLE KEYS */;
INSERT INTO `user_booking_seat_list` VALUES (1,3,8,'[\"A10\",\"A8\"]','2022-04-04 17:18:09','2022-04-04 17:18:09','root@localhost',0),(2,1,8,'[\"A7\",\"A8\"]','2022-04-04 17:18:27','2022-04-04 17:31:00','root@localhost',0),(3,3,8,'[\"A7\",\"A8\"]','2022-04-04 17:27:09','2022-04-04 17:27:09','root@localhost',0);
/*!40000 ALTER TABLE `user_booking_seat_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER user_booking_seat_list_insert_trigger BEFORE INSERT ON caw_studios.user_booking_seat_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER user_booking_seat_list_update_trigger BEFORE UPDATE ON caw_studios.user_booking_seat_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile_number` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `creation_date` datetime DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `last_updated_by` varchar(150) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (1,'test','ada@gmail.com',1212,'$2b$10$jIh29Zchz9RkWEdpkEDW3ub3Pa8xVr5rzUFWfOTnYDCR8yqCspypK',0,'2022-04-04 15:10:38','2022-04-04 15:10:38','root@localhost',0),(2,'test','ada@gma1il.com',11212,'$2b$10$2yBDC/IaeGMhkEMTFKFOMeANmNhsrvJr2q3.kD3wlze3c4HN1eF.6',0,'2022-04-04 15:11:40','2022-04-04 15:11:40','root@localhost',0),(3,'test','ada1@gma1il.com',111212,'$2b$10$lBuIiOFvT6Zh86owtg6fH.Dp6Zhj7kWw.Z0SU2JB7DetiQJd0hHcC',0,'2022-04-04 15:23:09','2022-04-04 15:23:09','root@localhost',0);
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER user_details_insert_trigger BEFORE INSERT ON caw_studios.user_details
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER user_details_update_trigger BEFORE UPDATE ON caw_studios.user_details
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-04 17:46:18
