import React from 'react';
import './App.css'; // Import the CSS file

function CoinTable({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="cell">Icon and Name</th>
          <th className="cell">Symbol</th>
          <th className="cell">Price</th>
          <th className="cell">Volume</th>
          <th className="cell">Change</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, index) => (
          <tr key={coin.id}>
            <td className="cell">
              <img src={coin.image} alt={coin.name} className="image" />
              {coin.name}
            </td>
            <td className="cell">{coin.symbol}</td>
            <td className="cell">${coin.current_price}</td>
            <td className="cell">${coin.total_volume}</td>
            <td className={`cell ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}`}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CoinTable;
