import axios from "axios";
import React, { useEffect, useState } from "react";
import { TrendingCoins } from "../../Config/Api";
import "../Banner/Carousel.css";
import { CryptoState } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
export function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+ (?!\d))/g,",")
}

function Carousel() {


  const { currency,symbol } = CryptoState();
  const [trending, setTrending] = useState([]);
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);
  const items = trending.map((coin) => {
    let profit=coin.price_change_percentage_24h>=0

    return (
      <Link to={`/coins/${coin.id}`} className="Carousel-Item">
        <img
          src={coin?.image}
          alt={coin.name}
          height="80px"
          style={{ marginBottom: 10 }}
        />
        <span style={{marginBottom:10}}>
          {coin?.symbol}
          &nbsp;
          <span style={{
            color:profit > 0 ? "rgb(14,203,129)" :"red",
            fontWeight:500
          }}>{profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%</span>
        </span>
        <span style={{fontSize:22 , fontWeight:500,marginBottom:10}}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div className="Carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        disableButtonsControls
        autoPlay
        items={items}
      />
    </div>
  );
}

export default Carousel;
