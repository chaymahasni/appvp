import React ,{useState, useEffect} from 'react';

export default function products() {
    const [data, setData]= useState([]);
    const [filter, setFilter]= useState(data);
    const [loading, setLoading]= useState(false);
    let componentMounted = true ;
    useEffect (()=> {
const getProducts = async () => {
    setLoading(true);
    const response = await fetch('');
}
getProducts();
    }, [] );
  return (
    <div>

    </div>
  )
}
