import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import './App.css';
import DocumentList from "./components/DocumentList";

function App() {
    const [accounts, setAccounts] = useState([]) ;
    const [connectedAccount, setConnectedAccount] = useState("no account connected") ;
    const [documents, setDocuments] = useState([]) ;

    useEffect(() => {
        const getAccounts = async () => {
            const accountsFromServer = await fetchAccounts()
            setAccounts(accountsFromServer)
        }
        const getDocuments = async () => {
            const documentsFromServer = await fetchDocuments() ;
            setDocuments(documentsFromServer) ;
        }
        getDocuments();
        getAccounts();
    }, [])

    const fetchAccounts = async () => {
        const res = await fetch('http://localhost:8081/accounts')
        const data = await res.json()
        console.log(data) ;
        return data
    }

    const fetchDocuments = async () => {
        const res = await fetch("http://localhost:8081/documents") ;
        const data = await res.json() ;
        return data ;
    }

    const connectAccount = (account) => {
        setConnectedAccount(account) ;
        console.log(connectedAccount) ;
    }

    const borrow = async (ids) => {
        const res = await fetch('http://localhost:8081/borrow',
            {
                method : 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(ids)
            });
        const data = await res.json() ;
        setDocuments(data) ;
    }

  return (
    <div>
      <header>
        <h1>Bibliotheque</h1>
          <h1>{connectedAccount === "no account connected" ? connectedAccount : connectedAccount.firstName}</h1>
      </header>
        <Routes>
          <Route path="/" element={<LandingPage accounts={accounts} connection={connectAccount}/>}/>
            <Route path="/documents" element={<DocumentList account={connectedAccount} documents={documents} borrow={borrow}/>}/>
        </Routes>
    </div>
  );
}

export default App;
