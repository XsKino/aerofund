import React, { useState, useEffect } from 'react';
import { ParimutuelStore } from '@hxronetwork/parimutuelsdk';

const Store = () => {
  const [state, setState] = useState({
    price: null,
    volume: null,
  });

  const store = new ParimutuelStore('https://api.hxro.io', 'YOUR_API_KEY');

  useEffect(() => {
    store.subscribe('BTC/USD', (event) => {
      const { price, volume } = event.data;
      setState({ price, volume });
    });
  }, []);

  return (
    <div>
      <h1>Parimutuel Store</h1>
      <p>Price: {state.price}</p>
      <p>Volume: {state.volume}</p>
    </div>
  );
};

export default Store;