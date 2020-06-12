import React from "react";
import data from "./data";

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  //   get data form the json object
  componentDidMount() {
    let rooms = this.formatData(data);
    console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    // get the max price from data
    let maxPrice = Math.max(...rooms.map((room) => room.price));
    // get the max size from data
    let maxSize = Math.max(...rooms.map((room) => room.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }
  // format data to be in a single object
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  // get the single room data based on the slug
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  // handle change from fliter room
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
    console.log(name, value);
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      price,
      minSize,
      maxSize,
      capacity,
      pets,
      breakfast,
    } = this.state;
    // all rooms
    let tempRooms = [...rooms];
    // transform string to value
    capacity = parseInt(capacity);
    price = parseInt(price);
    //filter by guest number
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity === capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by room size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // filter by ptes
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
