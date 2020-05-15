select * from real_estate_wish_list_items rewli
join houses h on rewli.house_id = h.house_id
where rewli.list_id = $1;