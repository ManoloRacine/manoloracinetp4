import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import './App.css';

function App() {
    const [accounts, setAccounts] = useState([]) ;
    const [connectedAccount, setConnectedAccount] = useState("no account connected")

    useEffect(() => {
        const getAccounts = async () => {
            const accountsFromServer = await fetchAccounts()
            setAccounts(accountsFromServer)
        }
        getAccounts()
    }, [])

    const fetchAccounts = async () => {
        const res = await fetch('http://localhost:8081/accounts')
        const data = await res.json()
        console.log(data) ;
        return data
    }

    const connectAccount = (account) => {
        setConnectedAccount(account) ;
        console.log(connectedAccount) ;
        console.log("test") ;
    }

  return (
    <div>
      <header>
        <h1>Bibliotheque</h1>
          <h1>{connectedAccount === "no account connected" ? connectedAccount : connectedAccount.firstName}</h1>
      </header>
        <Routes>
          <Route path="/" element={<LandingPage accounts={accounts} connection={connectAccount}/>}/>
        </Routes>
    </div>
  );
}

export default App;
