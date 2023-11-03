import React, { useEffect, useState } from 'react';
import CoinTable from './CoinTable';



function App() {
  const [coinDataThen, setCoinDataThen] = useState([]);
  const [coinDataAsync, setCoinDataAsync] = useState([]);

  useEffect(() => {
    // Fetch data using .then
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then((response) => response.json())
      .then((data) => {
        setCoinDataThen(data);
      });

    // Fetch data using async-await
    async function fetchDataAsync() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        setCoinDataAsync(data);
      } catch (error) {
        console.error('Error fetching data: ' + error);
      }
    }

    fetchDataAsync();
  }, []);

  return (
    <div>
      <CoinTable data={coinDataThen} />
    </div>
  );
}

export default App;
