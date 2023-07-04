import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row foot mb-30">
          <div className="footerContent">
            <div className="row foot">
              <div className="about">
                <h2 className="aboutHeading">About</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident rerum unde possimus molestias dolorem fuga, illo
                  quis fugiat!
                </p>
              </div>
              <div className="navigation">
                <h2 className="aboutHeading">Navigation</h2>
                <ul className="footerLinks">
                  <li>
                    <span>About Us</span>
                  </li>
                  <li>
                    <span>Services</span>
                  </li>
                  <li>
                    <span>Testimonials</span>
                  </li>
                  <li>
                    <span>Contact Us</span>
                  </li>
                </ul>
              </div>
              <div className="navigation">
                <h2 className="aboutHeading">Follow Us</h2>
                <ul className="socialMedia">
                  <li>
                    <span>
                      <BsTwitter />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaFacebookF />
                    </span>
                  </li>
                  <li>
                    <span>
                      <AiOutlineInstagram />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaLinkedinIn />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerSearch">
            <div>
              <form className="searchForm">
                <input className="productSearch"
                  type="text"
                  name="Search"
                  placeholder="Search Products..."
                ></input>
                    <button className="footBtn">Search</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyRight">
        Copyright ©2023 All rights reserved | This template is made with  by Colorlib
        </div>
      </div>
    </div>
  );
}

export default Footer;
