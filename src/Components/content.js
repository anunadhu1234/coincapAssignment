import React from 'react'
import ContentItems from './contentItems'
import TableData from './TableData'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exchanges from './Exchanges';


function Content(props) {
  return (
      <>
      <Router>
    <div id={props.mode==='dark'?'contentDark':'content'} class="smcon">
        <ContentItems mode={props.mode}/>
    </div>
    <div className="dataTable container">
      <Routes>
    <Route exact path='/' element={<TableData mode={props.mode} title="Coins | CoinCap.io"/>}/>
    <Route exact path='/exchanges' element={<Exchanges mode={props.mode} title="Exchanges | CoinCap.io" />}/>
    <Route exact path='/swap' />
    </Routes>
    </div>
    </Router>
    </>
  )
}

export default Content