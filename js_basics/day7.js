// Objects

// const book = {
   // name: "Atomic habits",  author: "James Caler",  publishYear: 2019 }

// console.log(bookDetails.bookname)
// console.log(bookDetails.author)
// console.log(bookDetails.publishYear)

// console.log(bookDetails)


// let book = {title: "Atomic Habits",author: "James caler",genre: "Self improvement",year: 2019 };
  
  // console.log(book.getBookInfo()); 


  let book = {
    bookName: "Ikigai",
    YearOfPublish: 2020,
    writer: "Hector Gracia", 
  

  createNewYear: function (newYearValue) {
    this.YearOfPublish = newYearValue
  } // this method is used here.
}
  book.createNewYear(2024)
  // console.log(book.YearOfPublish)// after lot of trial I did it.
  

  const library = {
    name: "City Public Library",
    books: [
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        publicationYear: 1999
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        publicationYear: 1960,

        getBookInfo: function() {
            return `${this.title} (${this.publicationYear})`;
          }
      }
    ]
  };
  
  // console.log(library);

// console.log("Library Name:", library.name);


// console.log("Books:");
// library.books.forEach(book => {
 //  console.log(book.title); })

 // for (let property in library.books[0]) {console.log(`${property}: ${library.books[0][property]}`) }

 const firstBook = library.books[0];
const keys = Object.keys(firstBook);
const values = Object.values(firstBook);

keys.forEach((key, index) => {
  console.log(`${key}: ${values[index]}`);
});