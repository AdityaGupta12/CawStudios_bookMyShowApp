CREATE TABLE cinemas_list (
 id int(11) NOT NULL AUTO_INCREMENT,
 cinemas_name varchar(255) NOT NULL,
 cities_id int(11) NOT NULL,
 creation_date datetime DEFAULT NULL,
 last_update datetime DEFAULT NULL,
 last_updated_by varchar(150) DEFAULT NULL,
 is_deleted tinyint(1) DEFAULT '0',
 PRIMARY KEY (id),
 KEY `fk_cinemas_list_cities_id` (`cities_id`),
  CONSTRAINT `fk_cinemas_list_cities_id` FOREIGN KEY (`cities_id`) 
  REFERENCES `cities_list` (`id`) ON DELETE CASCADE
 );
 
delimiter //
CREATE TRIGGER cinemas_list_insert_trigger BEFORE INSERT ON caw_studios.cinemas_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END;//
 
CREATE TRIGGER cinemas_list_update_trigger BEFORE UPDATE ON caw_studios.cinemas_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END; //
delimiter ;

INSERT INTO
  cinemas_list(cinemas_name, cities_id)
VALUES("PVR Rivoli- CP,Delhi", 1), ("Liberty Cinema", 1);

INSERT INTO
  cinemas_list(cinemas_name, cities_id)
VALUES("Metro INOX Cinema", 2), ("PVR Icon Cinemas - Versova", 2);

INSERT INTO
  cinemas_list(cinemas_name, cities_id)
VALUES("New Empire Cinema", 3), ("Elite Cinema Hall", 3);

INSERT INTO
  cinemas_list(cinemas_name, cities_id)
VALUES("City Pride Mangala Multiplex", 4), ("PVR ICON Pavilion Mall Pune", 4);

INSERT INTO
  cinemas_list(cinemas_name, cities_id)
VALUES("PVR Rajajinagar-Orion Mall", 5), ("Vaibhav Theatre", 5);

INSERT INTO
  cinemas_list(cinemas_name, cities_id)
VALUES("Jazz Cinemas LUXE", 6), ("AGS Cinemas", 6);