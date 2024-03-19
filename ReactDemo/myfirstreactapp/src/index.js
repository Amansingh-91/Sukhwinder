import React from "react";
import ReactDOM from "react-dom/client";


// component => class / function 

// Functional Component / Stateless component


// In React everything is component  

// components are basically functions of js  but Here These Functions have some special Rules

// first Rule Component Name are always Capital

// component should always return ReactElementChild or JSX;

// Creating Our First Component

function Greeting() {
  return React.createElement("h1", {}, "Hello World");
}
const Demo = () => {
  return React.createElement("p", {}, "lorem ipsum ", React.createElement("span", {}, "I am Span"));
}
const AboutMe = () => {
  // Adding Variables 
  return (
    <section>
      <p>
        I am Aman Saini
      </p>
      <p>
        lorem ipsum <span> I am Span</span>
      </p>
    </section>

  );
}
// const Image = ()=>{
//   return <img src="https://images-eu.ssl-images-amazon.com/images/I/61De10B-ooL._AC_UL600_SR600,400_.jpg" alt="My Book Image"></img>
// }

// const Title = ()=>{
//   return <h3>RAM C/O ANANDHI</h3>
// }

// const Author = ()=>{
//   return <h6>AKHIL P DHARMAJAN</h6>
// }

// const Price = ()=>{
//   return <p>395.0</p>
// }




// const img = "https://images-eu.ssl-images-amazon.com/images/I/61De10B-ooL._AC_UL600_SR600,400_.jpg";
// const title = "RAM C/O ANANDHI";
// const author = "AKHIL P DHARMAJAN";
// const price = 395.0;

// const firstBook = {
//   img:"https://images-eu.ssl-images-amazon.com/images/I/61De10B-ooL._AC_UL600_SR600,400_.jpg",
//   title: "RAM C/O ANANDHI",
//   author: "AKHIL P DHARMAJAN",
//   price: 395.0
// }
// const secondBook = {
//   img:"https://images-eu.ssl-images-amazon.com/images/I/81Ls+SBCLiL._AC_UL600_SR600,400_.jpg",
//   title: "Atomic Habits: the life-changing",
//   author: "James Clear",
//   price: 299.0
// }

const booksData = [{
  img: "https://images-eu.ssl-images-amazon.com/images/I/61De10B-ooL._AC_UL600_SR600,400_.jpg",
  title: "RAM C/O ANANDHI",
  author: "AKHIL P DHARMAJAN",
  price: 395.0
},
{
  img: "https://images-eu.ssl-images-amazon.com/images/I/81Ls+SBCLiL._AC_UL600_SR600,400_.jpg",
  title: "Atomic Habits: the life-changing",
  author: "James Clear",
  price: 299.0
},
{
  img: "https://images-eu.ssl-images-amazon.com/images/I/91i1NmevlhL._AC_UL600_SR600,400_.jpg",
  title: "Mastering the Data Paradox: Key to Winning in the AI Age",
  author: "Nitin Seth",
  price: 699.0
},
{
  img: "https://images-eu.ssl-images-amazon.com/images/I/71qifrtz+yL._AC_UL600_SR600,400_.jpg",
  title: "AATUJEEVITHAM",
  author: "BENYAMIN",
  price: 199.0
},
{
  img: "https://images-eu.ssl-images-amazon.com/images/I/91i1NmevlhL._AC_UL600_SR600,400_.jpg",
  title: "Mastering the Data Paradox: Key to Winning in the AI Age",
  author: "Nitin Seth",
  price: 699.0
},
]

const Book = (props) => {
  // const img = "https://images-eu.ssl-images-amazon.com/images/I/81Ls+SBCLiL._AC_UL600_SR600,400_.jpg" ;
  console.log(props);
  const { img, title, author, price } = props;
  return (
    <div>
      <img src={img} alt="My Book Image"></img>
      <h3>{title}</h3>
      <h6>{author}</h6>
      <p>{price}</p>
    </div>
  )
}
const names = [ "Aman","Jack","Jhon","Jim"];

const appendNames = names.map(name =>{
  return <h1>{name}</h1>;
})

const appendBooks = booksData.map(bookData=>{
  return <Book {...bookData}></Book>
})
const BookList = () => {
  return (
    <section>
      {/* <Book {...firstBook} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} price={secondBook.price} /> */}

      {/* {names}
      {appendNames} */}
      {appendBooks}
    </section>

  )
}



// JSX Rule
// all the elements should be closed <img src="" alt=""/>
// always return One Child. 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <BookList />
  </React.Fragment>
)
