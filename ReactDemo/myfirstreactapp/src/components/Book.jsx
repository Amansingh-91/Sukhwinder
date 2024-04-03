import React from "react";

// Named Export
export const Image = (props)=>{
  return <img src={props.img} alt="My Book Image"></img>
}
export const Book = (props) => {
    // const img = "https://images-eu.ssl-images-amazon.com/images/I/81Ls+SBCLiL._AC_UL600_SR600,400_.jpg" ;
    // console.log(props);
    const { img, title, author, price } = props;
    const handleMouseOver = (e)=>{
      console.log(e.target.textContent);
    }
    return (
      <div className="book" >
        <Image img={img}/>
        <h3 id = {"title"}>{title}</h3>
        <h6 onMouseOver={handleMouseOver}>{author}</h6>
        {/* <p style={{color:"red",fontSize:"32px"}}>{price}</p> */}
        <p>{price}</p>
  
      </div>
    )
}

