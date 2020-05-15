insert into real_estate_wish_list (
    user_id
)   values (
    $1
)
returning list_id;