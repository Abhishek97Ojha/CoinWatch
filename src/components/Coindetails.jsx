import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BackgroundImg from "../Images/cryptobckg.jpeg";
import './Coindetails.css'


export const Coindetails = () => {
    let { id } = useParams();
    const [coindetails, setCoindetails] = useState(null);

    useEffect(() => {
        
        const coinsdetails= async()=>{
          const res= await fetch( `https://api.coingecko.com/api/v3/coins/${id}`)
          console.log(res)
          const data= await res.json()
          console.log(data)
          setCoindetails(data)
          
        }
  
        coinsdetails()
    }, [id]);

    if(!coindetails){
        return null
    }


  return (
    <div
    className="coinPage-Container"
    style={{
      background: `linear-gradient(transparent, rgb(0, 0, 0,0.8) 70%, black),url(${BackgroundImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="coinPage-Info">
      <h1>{coindetails.name}</h1>
      <img src={coindetails.image.large} alt="Icon" className="coinPage-Icon" />
      <div className="coinPage-Data">
        <div className="coinPage-Row">
          <h3 className="coinPage-RowHeader">Symbol :</h3>
          <h3 className="coinPage-RowData">{coindetails.symbol}</h3>
        </div>
        <div className="coinPage-Row">
          <h3 className="coinPage-RowHeader">Current Price :</h3>
          <h3 className="coinPage-RowData">
            $ {coindetails.market_data.current_price.usd.toLocaleString()}
          </h3>
        </div>
        <div className="coinPage-Row">
          <h3 className="coinPage-RowHeader">Market Cap :</h3>
          <h3 className="coinPage-RowData">
            $ {coindetails.market_data.market_cap.usd.toLocaleString()}
          </h3>
        </div>
        <div className="coinPage-Row">
          <h3 className="coinPage-RowHeader">Total Volume :</h3>
          <h3 className="coinPage-RowData">
            $ {coindetails.market_data.total_volume.usd.toLocaleString()}
          </h3>
        </div>
        <div className="coinPage-Row">
          <h3 className="coinPage-RowHeader">24hr High :</h3>
          <h3 className="coinPage-RowData green">
            $ {coindetails.market_data.high_24h.usd.toLocaleString()}
          </h3>
        </div>
        <div className="coinPage-Row">
          <h3 className="coinPage-RowHeader">24hr Low :</h3>
          <h3 className="coinPage-RowData red">
            $ {coindetails.market_data.low_24h.usd.toLocaleString()}
          </h3>
        </div>
      </div>
      <Link to="/">
        <div className="coinPage-RouteButton">Go back</div>
      </Link>

      {/* coinName={coins.name}
          coinSymbol={coins.symbol}
          price={coins.current_price}
          marketCap={coins.market_cap}
          priceChange={ */}
    </div>
  </div>
  )
}
