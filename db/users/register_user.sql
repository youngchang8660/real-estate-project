insert into real_estate_users (
    email,
    password
)   values (
    $1,
    $2
)   
returning user_id, email;