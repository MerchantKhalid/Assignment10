import React from "react";
import AllInstructor from "../AllInstructor/AllInstructor";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-style">
        <div className="left-nav">
          <div className="home-title">
            <h1 className="tag">Figure it Out</h1>
            <p className="paragraph">
              Every day is another chance to get stronger, to eat better, to
              live healthier, and to be the best version of you,Exercise not
              only changes your body. It changes your mind, your attitude, and
              your mood.If you want something you have never had, you must be
              willing to do something you have never done.The difference between
              the impossible and the possible lies in a persons determination.No
              matter how many mistakes you make or how slow you progress, you
              are still way ahead of everyone who isnt trying.
            </p>
            <br></br>
            <button className="btn">See More</button>
          </div>
        </div>
        <div className="home-img">
          <img
            src="https://cdn.hipwallpaper.com/m/92/96/R4YNo1.jpg"
            alt=""
          ></img>
        </div>
        <br></br>
        <hr></hr>
      </div>
      <div>
        <Services></Services>
      </div>
      <div>
        <AllInstructor></AllInstructor>
      </div>
    </div>
  );
};

export default Home;
