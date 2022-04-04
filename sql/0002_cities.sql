CREATE TABLE cities_list (
 id int(11) NOT NULL AUTO_INCREMENT,
 city_name varchar(255) NOT NULL,
 creation_date datetime DEFAULT NULL,
 last_update datetime DEFAULT NULL,
 last_updated_by varchar(150) DEFAULT NULL,
 is_deleted tinyint(1) DEFAULT '0',
 PRIMARY KEY (id)
 );
 
delimiter //
CREATE TRIGGER cities_list_insert_trigger BEFORE INSERT ON caw_studios.cities_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END;//
 
CREATE TRIGGER cities_list_update_trigger BEFORE UPDATE ON caw_studios.cities_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END; //
delimiter ;

INSERT INTO
  cities_list(city_name)
VALUES("Delhi"),("Mumbai"),("Kolkata"),("Pune"),("Bengaluru"),("Chennai");
