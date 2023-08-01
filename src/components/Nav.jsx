import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="Nav">
			<Link to="/currencies"><div>DO NOT BUY CRYPTO</div></Link>
			<Link to="/price/:symbol"><div>IT'S A SCAM</div></Link>
		</div>
	)
}

export default Nav
