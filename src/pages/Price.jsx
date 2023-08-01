import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const Price = () => {

	const apiKey = "AD87A11D-22FD-4C00-BB7C-C14EBA7FDF79";
	const params = useParams();
	const symbol = params.symbol;
	const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

	const [coin, setCoin] = useState("null");

	const getCoin = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setCoin(data);
	};

	useEffect(() => {
		getCoin();
	}, []);
	

	
	const loaded = () => {
		return (
			<div>
				<h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
				<h2>{coin.rate}</h2>
			</div>
		);
	};
	
	const loading = () => {
		return <h1>IT REALLY IS!</h1>;
	};



	return (
		coin && coin.rate ? loaded() : loading() 
	)
}

export default Price
