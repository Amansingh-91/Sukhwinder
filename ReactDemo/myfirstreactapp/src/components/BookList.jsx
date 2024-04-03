import React from "react";
import { Book } from "./Book";
import booksData from "./bookData";
const names = ["Aman", "Jack", "Jhon", "Jim"];

const appendNames = names.map(name => {
  return <h1>{name}</h1>;
})

const appendBooks = booksData.map(bookData => {
  return <Book key={bookData.id} {...bookData}></Book>
  // return <Book key={bookData.id} img={bookData.img} title={bookData.title} author={bookData.author} price={bookData.price}></Book>

})
export const BookList = () => {
  const printTitle = (e)=>{
    e.stopPropagation();
    // stopPropagation()
    console.log(e);
    if(e.target.tagName === "H3" && e.target.id ==="title"){
      console.log(e.target.textContent);
    }
  }
  return (
    <section className="booklist" onClick={printTitle}>
      {/* <Book {...firstBook} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} price={secondBook.price} /> */}

      {/* {names}
      {appendNames} */}
      {appendBooks}
      {/* <book {...booksData[0]}/>
      <book {...booksData[1]}/>
      <book {...booksData[2]}/>
      <book {...booksData[3]}/> */}

      {/* {
        booksData.map(bookData=>{
          // return <Book {...bookData}></Book>
          return <Book img={bookData.img} title ={bookData.title} author = {bookData.author} price={bookData.price}></Book>
        
        })
      } */}


    </section>

  )
}

// default export

// export default BookList;
