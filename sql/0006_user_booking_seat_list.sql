DROP TABLE IF EXISTS `user_booking_seat_list`;

CREATE TABLE `user_booking_seat_list` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` int(11) NOT NULL,
    `showtime_id` int(11) NOT NULL,
    `seat_booked` TEXT DEFAULT NULL,
    `creation_date` datetime DEFAULT NULL,
    `last_update` datetime DEFAULT NULL,
    `last_updated_by` varchar(150) DEFAULT NULL,
    `is_deleted` tinyint(1) DEFAULT '0',
    PRIMARY KEY (`id`),
    CONSTRAINT fk_user_booking_seat_list_user_id FOREIGN KEY (user_id) REFERENCES caw_studios.user_details (id) ON DELETE CASCADE,
    CONSTRAINT fk_user_booking_seat_list_showtime_id FOREIGN KEY (showtime_id) REFERENCES caw_studios.showtime_list (id) ON DELETE CASCADE
);

delimiter //
CREATE TRIGGER user_booking_seat_list_insert_trigger BEFORE INSERT ON caw_studios.user_booking_seat_list
FOR EACH ROW BEGIN
 SET NEW.creation_date=NOW();
 SET NEW.last_updated_by=USER();
 SET NEW.last_update=NOW();
END;//
 
CREATE TRIGGER user_booking_seat_list_update_trigger BEFORE UPDATE ON caw_studios.user_booking_seat_list
FOR EACH ROW
BEGIN
 SET NEW.last_updated_by=USER();
 SET NEW.last_update = NOW();
END; //
delimiter ;