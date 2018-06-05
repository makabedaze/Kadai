CREATE TABLE comments(
    id int AUTO_INCREMENT,
    room_id char, 
    message char,
    PRIMARY KEY (id)
);

CREATE TABLE rooms(
    id int AUTO_INCREMENT,
    name char,
    PRIMARY KEY (id)
);


insert into rooms(name) value('真壁について語るスレ');