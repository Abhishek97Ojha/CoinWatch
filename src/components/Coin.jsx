import React from "react";
import { useNavigate } from "react-router-dom";
import "./Coin.css";

const Coin = ({
  id,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  const navigate = useNavigate();

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <div className="image">
            <img src={image} alt="crypto" />
          </div>
          <h2>{name}</h2>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Price : ₹{price.toLocaleString("en-IN")}</p>
          <p className="coin-volume">Volume : ₹{volume.toLocaleString("en-IN")}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">Change : {priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">Change : {priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt cap : ₹{marketCap.toLocaleString("en-IN")}{" "}
          </p>
          <button
            className="coin-btn"
            onClick={() => {
              navigate(`/coinsdetails/${id}`);
            }}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coin;
