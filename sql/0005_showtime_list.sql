CREATE TABLE `showtime_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movies_id` varchar(255) NOT NULL,
  `cinemas_id` int(11) NOT NULL,
  `show_date` DATE NOT NULL,
  `show_time` DATETIME NOT NULL,
  `creation_date` datetime DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `last_updated_by` varchar(150) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `seat_avaibiltity` text DEFAULT NULL,
  PRIMARY KEY (`id`)
);
 
delimiter //
CREATE TRIGGER showtime_list_insert_trigger BEFORE INSERT ON caw_studios.showtime_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END;//
 
CREATE TRIGGER showtime_list_update_trigger BEFORE UPDATE ON caw_studios.showtime_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END; //
delimiter ;