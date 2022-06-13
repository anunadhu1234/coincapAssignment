import React, { useState } from 'react'
 
 

function TableData(props) {
  const [data, setData] = useState([]);
   

  let updateData = async ()=>{
    let url = `https://api.coincap.io/v2/assets/`;
    let fetched = await fetch(url);
    let parsedData = await fetched.json();
    setData(parsedData.data);
  }
 document.title = props.title;
  let roundOff = (d)=>{
    let c = d*1000;
    return (Math.round(c))/1000;
  }

  let roundOffM = (d)=>{
    return (Math.round(d/10000000))/100;
  }

  let roundOffS = (d)=>{
    if(d<1000000000){
      return(Math.round(d/10000 ))/100;
    }
    else{
      return (Math.round(d/10000000))/100;
    }
    
  }
  let conversionLP = (d)=>{
    return d.toLowerCase();
  }
   
   
updateData();

  return (
    <div>
        <table className="table">
  <thead id={props.mode==='dark'?'headD':'headL'}>
    <tr>
      <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Rank</th>
      <th scope="col" style={{textAlign:'left'}}>Name</th>
      <th scope="col" className="smp" style={{textAlign:'right'}}>Price</th>
      <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Market Cap</th>
      <th scope="col"  className="smp" style={{textAlign:'right'}}>VWAP &#40;24 Hr&#41;</th>
      <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Supply</th>
      <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Volume &#40;24 Hr&#41;</th>
      <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Change &#40;24 Hr&#41;</th>
    </tr>
  </thead>
  <tbody id={props.mode==='dark'?'rowD':'rowL'}>
    {data.map((element)=>{return( 
      <tr key={element.id} style={{cursor:'pointer' }} id="tablerow">
        <td className="xs-hidden " style={{textAlign:'right'}}>{element.rank}</td>
        <td><img  src={`https://assets.coincap.io/assets/icons/${conversionLP(element.symbol)}@2x.png`} height="25px" width="25px" alt={element.symbol}/> {element.name} <span className="xs-hidden " style={{color:'grey'}}>{element.symbol}</span></td>
        <td  className="smp" style={{textAlign:'right'}}>${roundOff(element.priceUsd)}</td>
        
        <td style={{textAlign:'right' }} className="xs-hidden ">${roundOffM(element.marketCapUsd)}b</td>
         
        <td className="smp" style={{textAlign:'right'}}>${roundOff(element.vwap24Hr)}</td>
        <td style={{textAlign:'right'}} className="xs-hidden ">{roundOffS(element.supply) }{element.supply<1000000000?'m':'b'}</td>
        <td style={{textAlign:'right'}} className="xs-hidden ">${roundOffS(element.volumeUsd24Hr)}{element.volumeUsd24Hr<1000000000?'m':'b'}</td>
        <td style={{textAlign:'right' , color:element.changePercent24Hr<0?'red':'green'}} className="xs-hidden ">{roundOff(element.changePercent24Hr)}</td>
      </tr>
       
    )})}
     
  </tbody>
</table>
    </div>
  )
}

export default TableData