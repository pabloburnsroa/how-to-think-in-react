const { useState } = require('react');

const [cart, setCart] = useState([
  {
    name: '....',
    price: 0.99,
  },
  {
    name: '....',
    price: 1.99,
  },
]);

// Deriving State.... Do not do this....
const [numItem, setNumItems] = useState(2);
const [totalCartPrice, setTotalCartPrice] = useState(2.98);

// Do this..
const numItems = cart.length;
const totalPrice = cart.reduce((acc, cur) => acc + cur.price);


œ