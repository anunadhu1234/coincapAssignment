import { useState } from "react";
import React  from 'react'

function Exchanges(props) {
    const [data, setData] = useState([]);

  let updateData = async ()=>{
    let url = `https://api.coincap.io/v2/exchanges/`;
    let fetched = await fetch(url);
    let parsedData = await fetched.json();
 
    setData(parsedData.data);
  }
  document.title = props.title;
  let roundOff = (d)=>{
    let c = d*1000;
    return (Math.round(c))/1000;
  }
  
  let roundOffS = (d)=>{
    if(d<1000000000){
      return(Math.round(d/10000 ))/100;
    }
    else{
      return (Math.round(d/10000000))/100;
    }
    
  }


  
  updateData();
 
  return (
     
    <table className="table">
<thead id={props.mode==='dark'?'headD':'headL'}>
<tr >
  <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Rank</th>
  <th scope="col" style={{textAlign:'left'}}>Name</th>
  <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Trading Pairs</th>
  <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Top Pair</th>
  <th scope="col" style={{textAlign:'right'}}>Volume &#40;24 Hr&#41;</th>
  <th scope="col" className="xs-hidden " style={{textAlign:'right'}}>Total &#40;%&#41;</th>
  <th scope="col"  className="xs-hidden "style={{textAlign:'center'}}>Status</th>
</tr>
</thead>
<tbody id={props.mode==='dark'?'rowD':'rowL'}>
{data.map((element)=>{return(
  <tr key={element.exchangeId} style={{cursor:'pointer', }}>
    <td className="xs-hidden " style={{textAlign:'right'}}>{element.rank}</td>
    <td>{element.name}</td>
    <td className="xs-hidden "  style={{textAlign:'right'}}>{element.tradingPairs}</td>
    <td className="xs-hidden " style={{textAlign:'right'}}>N/A</td>
    <td style={{textAlign:'right'}}>${roundOffS(element.volumeUsd )}{element.volumeUsd<1000000000?'m':'b'}</td>
    <td className="xs-hidden " style={{textAlign:'right'}}>{roundOff(element.percentTotalVolume ) }</td>
    <td className="xs-hidden " style={{textAlign:'center'}} ><div className="dot" style={{backgroundColor:'green'}}></div></td>
  </tr>
)})}
 
</tbody>
</table>
 
  )
}

export default Exchanges