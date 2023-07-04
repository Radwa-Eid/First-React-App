import "./featurecard.css";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

function Featurecard(props) {
    let {img,tittle,name,address}=props;
  return (
    <div className="featurecard">
      <div className="featurecardContent">
        <div className="featureImg">
          <img src={img} alt="house"></img>
        </div>
        <div className="featureText">
          <span className="featureTittle">{tittle}</span>
          <span className="wishList">
            <span className="wishListIcon">
              <AiFillHeart />
            </span>
          </span>
          <h3 className="featureName">{name}</h3>
          <p className="featureAddress">{address}</p>
          <div className="starColored">
            <span className="rateColored">
              {" "}
              <AiFillStar />
            </span>
            <span className="rateColored">
              {" "}
              <AiFillStar />
            </span>
            <span className="rateColored">
              {" "}
              <AiFillStar />
            </span>
            <span className="rateColored">
              {" "}
              <AiFillStar />
            </span>
            <span className="rateUncolored">
              {" "}
              <AiFillStar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featurecard;
