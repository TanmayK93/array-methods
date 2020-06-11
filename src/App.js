import React from 'react';
import './App.css';
import Users from "./components/Users"
import AddUsers from './containers/AddUsers'
import { useDispatch, useSelector } from 'react-redux'
import { doubleMoney, showMillionaires, sortByRichest, calculateTotalWealth } from './actions/userActions'

function App() {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.users.usersData)
  const totalWealth = useSelector(state => state.users.totalWealth)

  const formatMoney = (number) => {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  return (
    <div className="App">
      <h1>Array Methods</h1>
      <div className="container">
        <aside>
          <AddUsers />
          <button type="submit" onClick={() => dispatch(doubleMoney(userState))}>Double Money</button>
          <button type="submit" onClick={() => dispatch(showMillionaires(userState))}>Wealth > 100 </button>
          <button type="submit" onClick={() => dispatch(sortByRichest(userState))}>Sort by Richest</button>
          <button type="submit" onClick={() => dispatch(calculateTotalWealth(userState))}>Calculate entire Wealth</button>
        </aside>

        <main id="main">
          <h2><strong>Person</strong> Wealth</h2>
          <Users />
          <hr />
          {totalWealth ? (
            <h2>Total Wealth: <strong>{formatMoney(totalWealth)}</strong></h2>) : <p></p>}
        </main>
      </div>
    </div >
  );
}

export default App;
