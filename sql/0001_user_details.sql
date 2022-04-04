DROP TABLE IF EXISTS `user_details`;

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
);

delimiter //
CREATE TRIGGER user_details_insert_trigger BEFORE INSERT ON caw_studios.user_details
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END;//
 
CREATE TRIGGER user_details_update_trigger BEFORE UPDATE ON caw_studios.user_details
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END; //
delimiter ;