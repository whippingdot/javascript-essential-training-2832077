const Book = class {
  constructor(
    title,
    author,
    genre,
    numberOfPages,
    hasPictures,
   // In object bookInfo
    numberOfMainCharacters,
    blurb,
    sequelsOrPrequels
  ) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.numberOfPages = numberOfPages;
    this.hasPictures = hasPictures;
    this.finished = false;
    this.bookInfo = {
      mainCharCount: numberOfMainCharacters,
      hasBlurb: blurb,
      inSeries: sequelsOrPrequels,
    };
  }
  toggleFinished() {
    if (this.finished == false) {
      this.finished = true;
    } else {
      this.finished = false;
    }
  }
};

export default Book;
