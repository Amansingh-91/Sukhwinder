import React, { useEffect, useState } from 'react';
import birthDayData from './data';
const List = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const handleClick = (e) => {
    e.stopPropagation();
    setData([]);
    setCount(0);
  }
  useEffect(() => {
    setData(birthDayData);
    setCount(birthDayData.length);
  }, [])
  return (
    <div className='container'>
      <h3>{count} Birthdays Today</h3>


      {
        data.map(person => {
          const { id, name, age, image } = person;
          return (
            <div className='person' key={id} id={id}>
              <img src={image} alt='' />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </div>
          )
        })
      }
      <button onClick={handleClick}>Clear All</button>


    </div>

  );
};

export default List;
