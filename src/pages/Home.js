import React from "react";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <section className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="main-sec">
                <NewsFeed />
              </div>
            </div>
            <div className="col-md-5">
              <div className="profile-sec">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
