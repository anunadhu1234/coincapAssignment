import React from 'react'
import settings from './settings.png'
import loupeD from './loupeD.png'
import loupeW from './loupeW.png'
import settingsW from './settingsW.png'
import { Link } from 'react-router-dom' 
function Navbar(props) {

   
  return (
    <>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
        <div className="container d-flex justify-content-between">
        <div className="p-2">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1 link">
                <a className="nav-link  " aria-current="page" href="/">Coins</a>
              </li>
              <li className="nav-item mx-1 link">
                <a className="nav-link " href="/exchanges">Exchanges</a>
              </li>
              <li className="nav-item mx-1 link">
                <a className="nav-link " href="/swap">Swap</a>
              </li>
            </ul>
          </div>
          </div>
          <div className="title p-2">
          <a className="navbar-brand" href="/"><img src={props.mode==='light'?"https://coincap.io/static/logos/black.svg":"https://coincap.io/static/logos/white.svg"} height="40px" width="81.93px" alt="icon"/></a>
          </div>
          <div className="p-2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4 my-1">
              <input type="text" placeholder="Search.."></input><img className="mx-2"height="15px" width="15px"  src={props.mode==='dark'?loupeW:loupeD} alt="img" />
              </li>
              <li className="nav-item mx-4 my-1 dropdown">
              <a  href="/" title={props.mode==='dark'?"Disable Dark Mode":"Enable Dark Mode"} onClick={props.toggleMode}> <img height="15px" width="15px" src={props.mode==='dark'?settingsW:settings} alt="img"/></a>
              </li>
              <li className="nav-item mx-4">
              <button className="btn" type="submit" id="connectBtn">Connect Wallet</button>
              </li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar