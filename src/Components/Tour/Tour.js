import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "./Tour.css";
import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";
import { getHouseDetail } from "../../ducks/houseReducer";
import axios from "axios";

const Tour = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isScheduled, setIsScheduled] = useState(false)

  const timeOptions = [
    { value: "9AM", label: "9AM" },
    { value: "10AM", label: "10AM" },
    { value: "11AM", label: "11AM" },
    { value: "12PM", label: "12PM" },
    { value: "1PM", label: "1PM" },
    { value: "2PM", label: "2PM" },
    { value: "3PM", label: "3PM" },
    { value: "4PM", label: "4PM" },
    { value: "5PM", label: "5PM" },
  ];

  const getHouseDetail = () => {
    axios
      .get(`/api/house/images/${props.match.params.house_id}`)
      .then((res) => {
        // console.log(res.data)
        props.getHouseDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  const scheduleTour = () => {
    axios
      .post("/api/tour", {
        user_id: props.user.user.user_id,
        house_id: props.house.house.house_id,
        date: selectedDate,
        time: selectedTime.value,
        customer_name: name,
        customer_number: number,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      toggleFn()
  };

  const toggleFn = () => {
      setIsScheduled(!isScheduled)
      alert('Successfully scheduled a tour!')
      props.history.push('/')
  }

  useEffect(() => {
    getHouseDetail();
  }, []);


  console.log(isScheduled)
  return (
    <div className="tour-body">
      <form className='tour-form'>
        <h2 className='pick-a-date'>Pick a date</h2>
        <DatePicker
          className="date-picker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          filterDate={(date) => date.getDay() !== 0}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
        <h2 className='pick-a-time'>Pick a time</h2>
        <Select
          className="time-options"
          value={selectedTime}
          onChange={(time) => setSelectedTime(time)}
          options={timeOptions}
        />
        <div className='input-form'>
           <input
          className="name-input"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="number-input"
          placeholder="Phone Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className='tour-submit-button' onClick={scheduleTour}>SCHEDULE</button> 
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser, getHouseDetail })(Tour);
