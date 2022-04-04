CREATE TABLE movies_list (
 id int(11) NOT NULL AUTO_INCREMENT,
 movies_name varchar(255) NOT NULL,
 creation_date datetime DEFAULT NULL,
 last_update datetime DEFAULT NULL,
 last_updated_by varchar(150) DEFAULT NULL,
 is_deleted tinyint(1) DEFAULT '0',
 PRIMARY KEY (id)
);
 
delimiter //
CREATE TRIGGER movies_list_insert_trigger BEFORE INSERT ON caw_studios.movies_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END;//
 
CREATE TRIGGER movies_list_update_trigger BEFORE UPDATE ON caw_studios.movies_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END; //
delimiter ;

INSERT INTO
  movies_list(movies_name)
VALUES("Attack: Part 1"),
  ("RRR"),
  ("Bachchhan Paandey");


CREATE TABLE movies_cities_list (
 id int(11) NOT NULL AUTO_INCREMENT,
 movies_id int(11) NOT NULL,
 cities_id int(11) NOT NULL,
 creation_date datetime DEFAULT NULL,
 last_update datetime DEFAULT NULL,
 last_updated_by varchar(150) DEFAULT NULL,
 is_deleted tinyint(1) DEFAULT '0',
 PRIMARY KEY (id),
 CONSTRAINT fk_movies_cities_list_movies_id FOREIGN KEY (movies_id) REFERENCES caw_studios.movies_list (id) ON DELETE CASCADE,
 CONSTRAINT fk_movies_cities_list_cities_id FOREIGN KEY (cities_id) REFERENCES caw_studios.cities_list (id) ON DELETE CASCADE
);
 
delimiter //
CREATE TRIGGER movies_cities_list_insert_trigger BEFORE INSERT ON caw_studios.movies_cities_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END;//
 
CREATE TRIGGER movies_cities_list_update_trigger BEFORE UPDATE ON caw_studios.movies_cities_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END; //
delimiter ;


INSERT INTO
  movies_cities_list(movies_id, cities_id)
VALUES(1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5), 
  (1, 6);

INSERT INTO
  movies_cities_list(movies_id, cities_id)
VALUES(2, 1),
  (2, 2),
  (2, 3),
  (2, 4),
  (2, 5), 
  (2, 6);

INSERT INTO
  movies_cities_list(movies_id, cities_id)
VALUES(3, 1),
  (3, 2),
  (3, 3),
  (3, 4);