select * from house_images hi
join houses h on hi.house_id = h.house_id
where hi.house_id = $1;