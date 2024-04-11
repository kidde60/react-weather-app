import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { getDataCity } from "../../Redux/Home/home";
import egypt from "../image/resize.jpg";

const CITYS = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const governorates = [
    "Cairo",
    "Alexandria",
    "Aswan",
    "Asyut",
    "Damietta",
    "Giza",
    "Ismailia",
    "Luxor",
    "Suez",
    "Sohag",
    "Qena",
    "Minya",
  ];
  return (
    <div className="container">
      <div className="Navbar">
        <img className="map" src={egypt} alt="egypt" />

        <input
          className="input"
          type="text"
          placeholder="Enter Egypt City Name ...."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <h1 className="text-center">WEATHER APP FOR EGYPT'S CITIES</h1>

      <div className="buttons">
        {governorates
          .filter((governorate) => {
            if (searchTerm == "") {
              return governorate;
            }
            if (
              governorate.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return governorate;
            }
          })
          .map((governorate) => (
            <Link className="link" key={uuid()} to="/details">
              <div
                className="town"
                id={governorate}
                onClick={() => {
                  dispatch(getDataCity(`${governorate}`));
                }}
                role="button"
                tabIndex={0}
                onKeyDown={() => {
                  dispatch(getDataCity(`${governorate}`));
                }}
              >
                {governorate}
              </div>
            </Link>
          ))}
      </div>
      {/* <div className="buttons">
        {governorates.map((governorate) => (
          <Link className="link" key={uuid()} to="/details">
            <div
              className="town"
              id={governorate}
              onClick={() => {
                dispatch(getDataCity(`${governorate}`));
              }}
              role="button"
              tabIndex={0}
              onKeyDown={() => {
                dispatch(getDataCity(`${governorate}`));
              }}
            >
              {governorate}
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};
export default CITYS;
