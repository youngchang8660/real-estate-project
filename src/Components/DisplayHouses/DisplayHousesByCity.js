import React, { useEffect, useState } from "react";
import axios from "axios";
import House from "./House";
import { connect } from "react-redux";
import { getWishList } from "../../ducks/houseReducer";
import {getHousesByCity} from '../../ducks/houseReducer'
import {getMappedHouses} from '../../ducks/houseReducer'
import { getUser } from "../../ducks/userReducer";
import "./Display.css";
import Select from "react-select";

const DisplayHousesByCity = (props) => {
  const [houseList, setHouseList] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // const [filterList, setFilterList] = useState([])
  const minPriceOptions = [
    { value: "800000", label: "$800K" },
    { value: "900000", label: "$900K" },
    { value: "1000000", label: "$1M" },
    { value: "1250000", label: "$1.25M" },
    { value: "1500000", label: "$1.5M" },
    { value: "1750000", label: "$1.75M" },
    { value: "2000000", label: "$2.0M" },
    { value: "2250000", label: "$2.25M" },
    { value: "2500000", label: "$2.5M" },
    { value: "2750000", label: "$2.75M" },
    { value: "3000000", label: "$3M" },
    { value: "3250000", label: "$3.25M" },
    { value: "3500000", label: "$3.5M" },
  ];

  const maxPriceOptions = [
    { value: "900000", label: "$900K" },
    { value: "1000000", label: "$1M" },
    { value: "1250000", label: "$1.25M" },
    { value: "1500000", label: "$1.5M" },
    { value: "1750000", label: "$1.75M" },
    { value: "2000000", label: "$2.0M" },
    { value: "2250000", label: "$2.25M" },
    { value: "2500000", label: "$2.5M" },
    { value: "2750000", label: "$2.75M" },
    { value: "3000000", label: "$3M" },
    { value: "3250000", label: "$3.25M" },
    { value: "3500000", label: "$3.5M" },
    { value: "5000000", label: "$5M" },
  ];
  // let filterList = [];
  // console.log(filterList.length);
  console.log(props);

  useEffect(() => {
    axios
      .get(`/api/houses-by-city/${props.match.params.city}`)
      .then( async(res) => {
        await props.getHousesByCity(res.data)
        props.getMappedHouses(filteredHouses(res.data))
      })
      .catch((err) => console.log(err));
    axios
      .get(`/api/get/list/${props.user.list_id}`)
      .then((res) => {
        props.getWishList(res.data);
        // console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [props.match.params.city]);

  useEffect(() => {
    console.log('changed price')
    props.getMappedHouses(filterHouses())
  }, [maxPrice, minPrice])

  const filterHouses = () => {
    let filterHouses = props.mappedHousesByCity.filter((el) => {
      if (minPrice !== "" && maxPrice !== "") {
        return el.price > minPrice.value && el.price < maxPrice.value;
      } else {
        return el;
      }
    })
    return filterHouses
  }

  const filteredHouses = (allHouses) => {
    console.log(allHouses)
    let filterHouses = allHouses.filter((el) => {
      if (minPrice !== "" && maxPrice !== "") {
        return el.price > minPrice.value && el.price < maxPrice.value;
      } else {
        return el;
      }
    })
    return filterHouses
  }

  const mapHouse = props.mappedHousesByCity
    .map((element) => (
      <House props={props} houseInfo={element} key={element.house_id} />
    ));



  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (+input > 0) {
      props.history.push(`/display/zip/${input}`);
    } else {
      props.history.push(`/display/city/${input.toLowerCase()}`);
    }
  };

  // console.log(minPrice.value);
  // console.log(maxPrice.value);
  return (
    <div className="display-body">
      <div className="display-search-container">
        <div className='search-container'>
          <input
          placeholder="City or Zip Code"
          className="display-search-box"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img
          className="display-search-button"
          onClick={handleSearch}
          alt="search-icon"
          src="https://image.flaticon.com/icons/png/512/1086/1086916.png"
          width="100"
        />
        </div>
        
        <div className='filter-container'>
          <div>
            <h3>Price</h3>
          <Select
            className='minPrice-filter'
            value={minPrice}
            onChange={(minPrice) => setMinPrice(minPrice)}
            options={minPriceOptions}
          />
          </div>
            <div>
              <h3>To</h3>
          <Select
            className='maxPrice-filter'
            value={maxPrice}
            onChange={(maxPrice) => setMaxPrice(maxPrice)}
            options={maxPriceOptions}
          />
            </div>
          
        </div>
      </div>
      <section className="display-house-body">
        <div className="mapped-house">{mapHouse}</div>
      </section>
    </div>
  );
};

// const mapStateToProps = (reduxState) => reduxState;
const mapStateToProps = (reduxState) => {
   const {housesByCity, mappedHousesByCity} = reduxState.house
   const {user} = reduxState.user
   return {housesByCity, mappedHousesByCity, user}
};

export default connect(mapStateToProps, { getWishList, getUser, getHousesByCity, getMappedHouses })(
  DisplayHousesByCity
);
