import React from "react";
import { RoomContext } from "../../context";
import Loading from "../layouts/loading.component";
import Room from "./room.component";
import Title from "../layouts/title.component";

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
export default FeaturedRooms;
