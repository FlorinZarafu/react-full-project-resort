import React from "react";
import Hero from "../layouts/hero.component";
import Banner from "../layouts/banner.component";
import { Link } from "react-router-dom";
import Services from "../layouts/services.component";
import FeaturedRooms from "../layouts/featured-rooms.component";

class Home extends React.Component {
  render() {
    return (
      <>
        <Hero>
          <Banner
            title="luxurios rooms"
            subtitle="deluxe rooms starting at $299"
          >
            <Link to="rooms" className="btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </>
    );
  }
}
export default Home;
