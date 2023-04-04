import React, { useEffect, useState } from 'react'
import Coin from './Coin';
import { Pagination } from './Pagination';


export const Home = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const[currentpage,setCurrentpage]=useState(1);
    const[postperpage]=useState(10);


  
    useEffect(() => {
        const coinsdata= async()=>{
          const res= await fetch( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
          console.log(res)
          const data= await res.json()
          console.log(data)
          setCoins(data)
          
        }
  
        coinsdata()
    }, []);
  
    const filteredCoins = coins.filter((ele) =>
      ele.name.toLowerCase().includes(search.toLowerCase())
    );


    const indexoflastcoins =currentpage * postperpage
    const indexoffirstcoins =indexoflastcoins -postperpage
    const currentfiltercoins = filteredCoins.slice(indexoffirstcoins,indexoflastcoins)


  

  return (
    <>
      <h1 className="heading"> CryptoChecker</h1>
      <div className="coin-search">
        {/* <p className="coin-Text">Search a coin :-</p> */}
          <input
            type="text"
            placeholder="Search a coin"
            className="coin-input"
            onChange={(e)=>{
              setSearch(e.target.value);

            }}
          />
      </div>
      {currentfiltercoins.map((coin) => {
        return (
          <Coin
            id={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
          />
        
        );
      })}
      <Pagination postperpage={postperpage} totalpage={coins.length } setCurrentpage={setCurrentpage} currentpage={currentpage}/>
</> 
 )
}
