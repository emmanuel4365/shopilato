import watch from "../assets/images/shopilato_watch_banner.png";
import headphone from "../assets/images/shopilato_headphone_banner.png";
import tv from "../assets/images/shopilato_tv_banner.png";
import phone from "../assets/images/shopilato_phone_banner.png";
import { FiArrowRightCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { rightClick } from "../utils/RightArrow";
import { leftClick } from "../utils/LeftArrow";
import { clickCircle } from "../utils/ClickCircle";

const HomeBanner = () => {
  return (
    <div className="banner-container">
      <div className="image-container">
        <img
          src={watch}
          alt=""
          className="image image1"
          id="0"
          data-translate="0"
          data-selected="true"
        />
        <img
          src={headphone}
          alt=""
          className="image image2"
          id="1"
          data-translate="100"
          data-selected="false"
        />
        <img
          src={tv}
          alt=""
          className="image image3"
          id="2"
          data-translate="200"
          data-selected="false"
        />
        <img
          src={phone}
          alt=""
          className="image image4"
          id="3"
          data-translate="300"
          data-selected="false"
        />
      </div>
      <div className="banner-circles-container">
        <div
          className="circle circle1 selected"
          id="0"
          onClick={clickCircle}
        ></div>
        <div className="circle circle2" id="1" onClick={clickCircle}></div>
        <div className="circle circle3" id="2" onClick={clickCircle}></div>
        <div className="circle circle4" id="3" onClick={clickCircle}></div>
      </div>
      <FiArrowLeftCircle className="left-arrow" onClick={leftClick} />
      <FiArrowRightCircle className="right-arrow" onClick={rightClick} />
    </div>
  );
};
export default HomeBanner;
