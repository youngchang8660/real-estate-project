select * from real_estate_users reu
join real_estate_wish_list rewl on reu.user_id = rewl.user_id
where reu.email = $1;