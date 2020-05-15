create table houses (
    house_id serial primary key,
    address varchar(100) not null,
    zip_code int,
    city varchar(20),
    state varchar(20),
    price int,
    rent int,
    beds int,
    bath decimal,
    sq_ft int,
    description varchar(1000),
    year_built int
);

create table house_images (
    image_id serial primary key,
    house_id int references houses(house_id),
    image_one text,
    image_two text,
    image_three text,
    image_four text,
    image_five text,
    image_six text,
    image_seven text,
    image_eigth text,
    image_nine text,
    image_ten text,
    image_eleven text,
    image_twelve text,
    image_thirteen text,
    image_fourteen text,
    image_fifteen text,
    image_sixteen text,
    image_seventeen text,
    image_eigthteen text,
    image_nineteen text,
    image_twenty text
);

create table real_estate_users (
    user_id serial primary key,
    email varchar(150) not null,
    password varchar(250) not null
);

create table real_estate_wish_list (
    list_id serial primary key,
    user_id int references real_estate_users(user_id)
);

create table real_estate_wish_list_items (
    item_id serial primary key,
    list_id int references real_estate_wish_list(list_id),
    house_id int references houses(house_id)
);

create table tour (
    tour_id serial primary key,
    user_id int references real_estate_users(user_id),
    house_id int references houses(house_id),
    date varchar(100) not null,
    time varchar(10) not null,
    customer_name varchar(20) not null,
    customer_number int not null
);