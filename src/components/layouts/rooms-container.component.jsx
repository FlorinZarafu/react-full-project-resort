import React from "react";
import RoomsFilter from "./rooms-filter.component";
import RoomsList from "./rooms-list.component";
import { RoomConsumer } from "../../context";
import Loading from "./loading.component";

const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
};
export default RoomsContainer;
