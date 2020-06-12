import React from "react";
import Title from "./title.component";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktailes",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo a vitae asperiores quam! Quo, quae voluptate quam nesciunt repellat praesentium?",
      },
      {
        icon: <FaHiking />,
        title: "hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo a vitae asperiores quam! Quo, quae voluptate quam nesciunt repellat praesentium?",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttles",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo a vitae asperiores quam! Quo, quae voluptate quam nesciunt repellat praesentium?",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo a vitae asperiores quam! Quo, quae voluptate quam nesciunt repellat praesentium?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Services;
