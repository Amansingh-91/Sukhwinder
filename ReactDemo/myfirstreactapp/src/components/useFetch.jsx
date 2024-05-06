import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const getData = async ()=>{
            const response = await fetch(url);
            const newData = await response.json();
            setData(newData);
        }
        getData();

    },[]);
  return [data];
}

export default useFetch