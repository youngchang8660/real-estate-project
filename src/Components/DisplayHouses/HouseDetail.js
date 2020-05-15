import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getHouseDetail } from "../../ducks/houseReducer";
import "./HouseDetail.css";
// import '../MapGoogle/MapGoogle'
import MapGoogle from "../MapGoogle/MapGoogle";

const HouseDetail = (props) => {
  console.log(props);

  const getHouseDetail = () => {
    axios
      .get(`/api/house/images/${props.match.params.house_id}`)
      .then((res) => {
        // console.log(res.data)
        props.getHouseDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  const moveToTour = () => {
      if(props.user.email) {
        props.history.push('/tour')
      } else {
          alert('Please Login')
      }
  }

  useEffect(() => {
    getHouseDetail();
  }, []);

  return (
    <div className="house-detail-body">
      <div className="image-and-info">
        <div className="image-display">
          <img
            className="first-house-image"
            alt="head-image"
            src={props.house.head_image}
            height="600"
          />
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_one}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_two}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_three}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_four}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_five}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_six}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_seven}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_eigth}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_nine}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_ten}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_eleven}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_twelve}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_thirteen}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_fourteen}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_fifteen}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_sixteen}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_seventeen}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_eigthteen}
              height="49%"
              width="400"
            />
          </div>
          <div>
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_nineteen}
              height="50%"
              width="400"
            />
            <img
              className="house-image"
              alt="house-image"
              src={props.house.image_twenty}
              height="49%"
              width="400"
            />
          </div>
        </div>
        <div className="info-and-tour">
          <div className="house-detail-info">
            <div>
              <h2 className="house-detail-address">{props.house.address}</h2>
            </div>
            <div className="full-address">
              <h2 className="house-detail-city">{props.house.city},</h2>
              <h2 className="house-detail-state">{props.house.state}</h2>
              <h2 className="house-detail-zip">{props.house.zip_code}</h2>
            </div>
            <div className="beds-bath-ft">
              <h4>{props.house.beds} beds</h4>
              <h4>{props.house.bath} baths</h4>
              <h4>{props.house.sq_ft} sqft</h4>
            </div>
            <h2 className="house-detail-price">${props.house.price}</h2>
          </div>
          <div className='schedule-tour'>
            <button onClick={moveToTour} className='tour-button'>SCHEDULE A TOUR</button>
          </div> 
        </div>
      </div>

      <section className="extra-white"></section>
      <div className="description-container">
        <p className="description">{props.house.description}</p>
      </div>
      <section>
        <MapGoogle house={props.house}/>
      </section>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  const { house } = reduxState.house;
  const { user } = reduxState.user;
  return { house, user };
};

// const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, { getHouseDetail })(HouseDetail);
