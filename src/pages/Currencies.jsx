import React from 'react'
import {Link} from 'react-router-dom';

const Currencies = () => {

	const currencies = [
		{ name: "Bitcoin", symbol: "BTC" },
		{ name: "Litecoin", symbol: "LTC" },
		{ name: "Ethereum", symbol: "ETH" },
		{ name: "Ethereum Classic", symbol: "ETC" },
		{ name: "Stellar Lumens", symbol: "XLM" },
		{ name: "Dash", symbol: "DASH" },
		{ name: "Ripple", symbol: "XRP" },
		{ name: "Zcash", symbol: "ZEC" },
	];

	const list = currencies.map( (coin, i) => {
		return <Link to={`/price/${coin.symbol}`} key={i}><h2>{coin.name}</h2></Link>
	})

	return (
		<div className="currencies">
			{list}
		</div>
	);
}

export default Currencies
