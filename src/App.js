
import './App.css';
import 'nes.css/css/nes.min.css';
import Menu from './components/Menu'
import Order from './components/Order'
import React, { useState, useEffect } from 'react'
import logo from './images/logo.png'

const menu = [
  {
    name: 'Cappuccino',
    price: 3.39
  },
  {
    name: 'Black Coffee',
    price: 3.19
  },
  {
    name: 'Americano',
    price: 2.29
  },
  {
    name: 'Latte',
    price: 1.99
  },
  {
    name: 'Espresso',
    price: 1.99
  },
  {
    name: 'Chai Latte',
    price: 3.79
  },
  {
    name: 'Iced Mocha',
    price: 3.39
  },
  {
    name: 'Macchiato',
    price: 2.29
  },
  {
    name: 'Mocha',
    price: 3.79
  },
  {
    name: 'Iced Latte',
    price: 3.39
  },
]

const initialPeople = [
  {
    name: 'Bob',
    balance: 0.00
  },
  {
    name: 'Jeremy',
    balance: 0.00
  },
  {
    name: 'John',
    balance: 0.00
  },
  {
    name: 'Abby',
    balance: 0.00
  },
  {
    name: 'Grace',
    balance: 0.00
  },
  {
    name: 'David',
    balance: 0.00
  },
  {
    name: 'Emily',
    balance: 0.00
  }
]
function App() {

  const [order, setOrder] = useState([]);
  const [people, setPeople] = useState(initialPeople);
  const [lastPayer, setLastPayer] = useState(null);
  const [lastPrice, setLastPrice] = useState();

  const addItemToOrder = (item) => {
    setOrder(currentOrder => [...currentOrder, item]);
  };

  const handleCheckout = (props) => {
    if (order.length === 0) return; // No items to checkout

    const subtotal = order.reduce((acc, item) => acc + item.price, 0);
    let minBalancePerson = people.reduce((min, person) => person.balance < min.balance ? person : min, people[0]);

    setPeople(people.map(person => 
      person.name === minBalancePerson.name 
      ? { ...person, balance: person.balance + subtotal }
      : person
    ));

    setLastPayer(minBalancePerson.name);
    setLastPrice(props);
    // Clear the order
    setOrder([]);
  };

  const getNextPayer = () => {
    return people.reduce((min, person) => person.balance < min.balance ? person : min, people[0]).name;
  };

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
      <Menu menu={menu} addItemToOrder={addItemToOrder}/>
      <div style={{
        width: '35%',
        height: 'auto'
      }}>
        <img src={logo} style={{width: '30%', marginTop: '5%'}}></img>
        <p style={{
          fontSize: '10px'
          ,marginTop: '3%',
          marginBottom: '5%'
        }}>This system chooses who should pay by the least balance. If there is a tie it chooses the first person on the list out of the tie!</p>
        <Order order={order} handleCheckout={handleCheckout} />
      </div>
      <div className="nes-container with-title" style={styles.container}>
        <p className="title">People and Balances</p>
        {people.map(person => (
          <div style={styles.eachItem}>
            <p style={styles.item}>{person.name}</p>
            <p style={styles.price}>${person.balance.toFixed(2)}</p>
          </div>
        ))}
        <div style={{marginTop: '20%'}}>
          {lastPayer && <p style={{fontSize: '20px'}}>{lastPayer} paid ${lastPrice.toFixed(2)}!</p>}
          <p>Next Payer: {getNextPayer()}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
      width: '35%',
      margin: '2%',
  }, 


  eachItem: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '3%'
  },

  price: {
      textAlign: 'left'
  },


}

export default App;
