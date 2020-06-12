import React from "react";
import Hero from "../layouts/hero.component";
import Banner from "../layouts/banner.component";
import { Link } from "react-router-dom";
import RoomsContainer from "../layouts/rooms-container.component";

class Rooms extends React.Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="Our rooms">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer />
      </>
    );
  }
}
export default Rooms;
