import React from 'react'

function ContentItems() {
  return (
      <div className=" container d-flex justify-content-between ">
    <div className="p-2 slots">
        MARKET CAP
        <div className="value">$1.43T</div>
    </div>
    <div className="p-2 slots">
        EXCHANGE VOL
        <div className="value">$66.05B</div>
    </div>
    <div className="p-2 slots">
        ASSETS
        <div className="value">2,295</div>
    </div>
    <div className="p-2 slots">
        EXCHANGES
        <div className="value">73</div>
    </div>
    <div className="p-2 slots">
        MARKETS
        <div className="value">15,069</div>
    </div>
    <div className="p-2 slots">
        BTC DOM INDEX
        <div className="value">36.7%</div>
    </div>
    </div>
  )
}

export default ContentItems