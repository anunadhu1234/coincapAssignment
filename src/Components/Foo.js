import React from 'react'
import wier from './wier.png'
import facebook from './facebook.png'

function Foo(props) {
    return (
        <footer class={`row row-cols-6 py-5 my-5 border-top ${props.mode==='dark'?'footerD':'footer'}`}>
        <div className="col">
         
        </div>
    
        <div className="col">
        <h5 style={{color:'white'}}>COINCAP.IO</h5>
          <ul className="nav flex-column ">
            <li className="nav-item mb-2 lg"><a href="/" className="nav-link p-0 lg">Methodology</a></li>
            <li className="nav-item mb-2 lg"><a href="/" className="nav-link p-0 lg">Support</a></li>
            <li className="nav-item mb-2 lg"><a href="/" className="nav-link p-0 lg">Our API</a></li>
            <li className="nav-item mb-2 lg"><a href="/" className="nav-link p-0 lg">Rate Comparison</a></li>
            <li className="nav-item mb-2 lg"><a href="/" className="nav-link p-0 lg">Careers</a></li>
          </ul>
        </div>
    
        <div className="col">
          <h5 style={{color:'white'}}>LEGALS</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 lg"><a href="/" className="nav-link p-0 lg">Terms of Service</a></li>
            <li className="nav-item mb-2 lg"><a href="/" className="nav-link p-0 lg">Privacy Policy</a></li>
            
          </ul>
          <h5 style={{color:'white'}}>DISCLAIMER</h5>

          <p style={{color:'lightgrey'}}>Neither ShapeShift AG nor CoinCap any way associated with CoinMarketCap LLC or any of its goods and services</p>
        </div>
    
        <div className="col">
          <h5 style={{color:'white'}}>FOLLOW US</h5>
          <ul className="nav flex-row">
            <li className="nav-item mb-2 op mx-1"><a href="/" className="nav-link p-0 lg"><img className="op" width='30px' height='30px' src={wier} alt="error"></img></a></li>
            <li className="nav-item mb-2 op"><a href="/" className="nav-link p-0 lg"><img className="op" width='30px' height='30px' src={facebook} alt="error"></img></a></li>
            
          </ul>
        </div>
    
        <div className="col">
          <h5 style={{color:'white'}}>COINCAP APP AVAILABLE ON</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 op"><a href="/" className="nav-link p-0"><img className="op" src="https://coincap.io/static/images/stores/google_play.svg" alt='play store'/></a></li>
            <li className="nav-item mb-2 op"><a href="/" className="nav-link p-0"><img className="op" src="https://coincap.io/static/images/stores/apple_store.svg" alt='app store'/></a></li>
             
          </ul>
        </div>
        <div className="col">

        </div>
      </footer>
    )
}

export default Foo