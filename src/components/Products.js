import React from 'react'

function Products() {
    const[data, setData]=React.useState([]);
    React.useEffect(()=>{
        fetch('http://localhost:3005/products').then((res)=>{
            return res.json();
    }).then((resp)=>{
        console.log(resp)
        setData(resp);
        
    })
        },[])
    
 return(
    <div>
    <h1>hello</h1>
    {/* { data.map((title,i)=> <h2 key={i}>{title.title}</h2>
    )} */}

 {data.map((title,i)=>{
    return(
        <li key={i}>{title.title}-{title.id}</li>
        
    )
 })}
    </div>
  );
}

export default Products;