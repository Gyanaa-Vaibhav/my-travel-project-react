import React from "react";
import './Card.css';
import {location} from "./data";
import locationicon from "./assets/location-icon.svg";

export default function Card(locations) { 
    // console.log(locations);
    console.log(locations.location);
    // console.log(locations.location[0].title);
    const a = locations.location;
    console.log(a);
    const b = a.map((location) => {
        console.log(location.imageUrl)
        return (
          <>
            <div className="card">
              <div className="img">
                <img src={location.imageUrl} alt="Mount Fugi" />
              </div>
              <div className="info">
                <div className="location">
                  <img src={locationicon} alt="location marker icon" />
                  <p>{location.location}</p>
                  <a href={location.googleMapsUrl} target="_blank">
                    View on Google Maps
                  </a>
                </div>
                <h1>{location.title}</h1>
                <h3 className="date">
                  {location.startDate} - {location.endDate}
                </h3>
                <p>{location.description}</p>
              </div>
            </div>
            <hr />
          </>
        );
    })
    console.log(b);

    return (
        <div>
            {b}
        </div>
    );
}