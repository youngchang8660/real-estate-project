insert into tour (
    user_id,
    house_id,
    date,
    time,
    customer_name,
    customer_number
)   values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
);