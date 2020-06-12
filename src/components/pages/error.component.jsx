import React from "react";
import Hero from "../layouts/hero.component";
import Banner from "../layouts/banner.component";
import { Link } from "react-router-dom";

class Error extends React.Component {
  render() {
    return (
      <Hero>
        <Banner title="404" subtitle="Page Not Found">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
export default Error;
