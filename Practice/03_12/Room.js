const Room = class {
  constructor(
    name,
    mirror,
    bathroom,
    storage,
    dressingRoom,
    bed,
    waterBottle,
    desk,
    books,
    electronics
  ) {
    this.name = name;
    this.mirror = mirror;
    this.bathroom = bathroom;
    this.storage = storage;
    this.dressingRoom = dressingRoom;
    this.bed = bed;
    this.waterBottle = waterBottle;
    this.items = {
      desk: desk,
      books: books,
      electronics: electronics,
    };
  }
  changeBottleSize(newBottleSize) {
    this.waterBottle = newBottleSize;
  }
};

export default Room;
