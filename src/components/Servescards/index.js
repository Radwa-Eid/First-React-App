import "./servescard.css";
import { FaHouseUser } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { GiBunkBeds } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import { IoPizzaOutline } from "react-icons/io5";

import house from "../../img/img_2.jpg.webp";
import chair from "../../img/img_3.jpg.webp";
import phone from "../../img/img_4.jpg.webp";
import car from "../../img/img_1.jpg.webp";

import Card from "../Card";
import Featurecard from "../Featurecard";

function Servescard() {
  return (
    <div className="servescards mb-30 pb-30">
      <div className="container">
        <div className="row mb-30">
          <div className="overLap">
            <div className="row cardsList">
              <Card
                icon={<FaHouseUser />}
                caption="Real Estate"
                number="3.921"
              />
              <Card
                icon={<GiBookshelf />}
                caption="Books & Magazine"
                number="389"
              />
              <Card icon={<GiBunkBeds />} caption="Furniture" number="1.229" />
              <Card
                icon={<HiLightBulb />}
                caption="Electronics"
                number="32.891"
              />
              <Card
                icon={<AiFillCar />}
                caption="Cars & Vehicles"
                number="29.221"
              />
              <Card icon={<IoPizzaOutline />} caption="Others" number="219" />
            </div>
          </div>
        </div>
        <div className="row">
          <h2 className="featureHeading">Feature Ads</h2>
        </div>
        <div className="row mb-30">
          <Featurecard img={house} tittle="Real Estate" name="House With Swimming Pool"  address="Don St ,Brooklyn,New York"/>
          <Featurecard img={chair} tittle="Furniture" name="Wooden Chair & Table"  address="Don St ,Brooklyn,New York"/>
          <Featurecard img={phone} tittle="Electronics" name="iPhone X Gray"  address="Don St ,Brooklyn,New York"/>
          <Featurecard img={car} tittle="Cars & Vehicles" name="Red Luxury Car"  address="Don St ,Brooklyn,New York"/>
        </div>
      </div>
    </div>
  );
}
export default Servescard;
