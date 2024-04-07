import { Input, Button, notification } from "antd";
import React, { useState } from "react";
import Axios from "axios";
import moment from "moment";

const Home = () => {
  const [address, setAddress] = useState();
  const [data, setData] = useState();

  const icons = [
    {
      name: [200, 201, 202],
      icon: "https://cdn.weatherbit.io/static/img/icons/t01d.png",
    },
    {
      name: [230, 231, 232, 233],
      icon: "https://cdn.weatherbit.io/static/img/icons/t04d.png",
    },
    {
      name: [300, 301, 302],
      icon: "https://cdn.weatherbit.io/static/img/icons/d01d.png",
    },
    {
      name: [500, 501, 511, 520, 522, 900],
      icon: "https://cdn.weatherbit.io/static/img/icons/r01d.png",
    },
    {
      name: [502],
      icon: "https://cdn.weatherbit.io/static/img/icons/r03d.png",
    },
    {
      name: [521],
      icon: "https://cdn.weatherbit.io/static/img/icons/r05d.png",
    },
    {
      name: [600, 610, 621],
      icon: "https://cdn.weatherbit.io/static/img/icons/s01d.png",
    },
    {
      name: [601, 602, 622, 623],
      icon: "https://cdn.weatherbit.io/static/img/icons/s02d.png",
    },
    {
      name: [611, 612],
      icon: "https://cdn.weatherbit.io/static/img/icons/s05d.png",
    },
    {
      name: [700, 711, 721, 731, 741, 751],
      icon: "https://cdn.weatherbit.io/static/img/icons/a01d.png",
    },
    {
      name: [800],
      icon: "https://cdn.weatherbit.io/static/img/icons/c01d.png",
    },
    {
      name: [801, 802],
      icon: "https://cdn.weatherbit.io/static/img/icons/c02d.png",
    },
    {
      name: [803],
      icon: "https://cdn.weatherbit.io/static/img/icons/c03d.png",
    },
    {
      name: [804],
      icon: "https://cdn.weatherbit.io/static/img/icons/c04d.png",
    },
  ];

  const handleGetWeather = async () => {
    if (address) {
      const url = `https://nominatim.openstreetmap.org/search?city=${address}&format=json`;

      const res = await Axios.get(url);
      if (res && res.data && res.data.length > 0) {
        const lon = res.data[0].lon;
        const lat = res.data[0].lat;

        const url2 = `https://api.weatherbit.io/v2.0/forecast/daily?key=5bb600eb1b814b3b89f85b64b08c3ee0&lat=${lat}&lon=${lon}`;

        const res2 = await Axios.get(url2);

        setData(res2.data);
      } else {
        notification.error({
          message: "Location not found.",
          placement: "bottomRight",
          duration: 2,
        });
      }
    } else {
      notification.error({
        message: "Enter city name.",
        placement: "bottomRight",
        duration: 2,
      });
    }
  };

  const onChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="home-container">
      <p className="header-div"> Check Weather</p>

      <div className="content">
        <p>Enter city name</p>
        <Input
          onChange={(e) => {
            onChange(e);
          }}
        ></Input>
        <Button onClick={handleGetWeather} type="primary">
          Search
        </Button>
        <div className="disclaimer">
          * This app is using data provided by a free API. I am not responsible
          for the accuracy or veracity of the information presented.
        </div>
        <div className="disclaimer">* API works best for bigger cities.</div>

        <div className="temperature">
          {data && data.data && (
            <div className="city">City: {data.city_name}</div>
          )}
          <div className="week">
            {data &&
              data.data &&
              data.data.length > 0 &&
              data.data.map((item, index) => {
                return (
                  <div className="day">
                    <div className="dayicon">
                      {icons.map((icon, index) => {
                        if (icon.name.includes(item.weather.code)) {
                          return (
                            <img
                              className="temperatureicon"
                              src={icon.icon}
                              alt="Profile"
                            />
                          );
                        }
                      })}
                    </div>
                    <div className="daydata">
                      <p style={{ fontSize: "18px" }}>
                        Date: {moment(item.valid_date).format("DD.MM.YYYY.")}{" "}
                      </p>
                      <p>Max: {item.high_temp} °C</p>
                      <p>Min: {item.low_temp} °C</p>
                      <p>Wind speed: {item.wind_spd} m/s</p>
                      <p>Current: {item.temp} °C</p>
                      <p>Probability of Precipitation: {item.pop} %</p>
                      <p>Pressure: {item.pres} mb</p>
                      <p>Humidity: {item.rh} %</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
