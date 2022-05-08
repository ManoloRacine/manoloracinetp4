import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import './App.css';
import DocumentList from "./components/DocumentList";
import BorrowingsList from "./components/BorrowingsList";
import EmployeePage from "./components/EmployeePage";
import CreateDVD from "./components/CreateDVD";
import CreateCD from "./components/CreateCD";
import CreateBook from "./components/CreateBook";
import CreateClient from "./components/CreateClient";
import DocumentResearch from "./components/DocumentResearch";

function App() {
    const [accounts, setAccounts] = useState([]) ;
    const [connectedAccount, setConnectedAccount] = useState("no account connected") ;
    const [documents, setDocuments] = useState([]) ;
    const [borrowings, setBorrowings] = useState([]) ;
    const [documentsResearched, setDocumentsResearched] = useState("no research made") ;
    let navigate = useNavigate() ;


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

    const fetchResearchedDocuments = async (formData) => {
        let parameter = "" ;
        let oneParameter = false ;

        if (formData['title'] !== "") {
            if (oneParameter) {
                parameter += "&" ;
            }
            else {
                parameter += "?" ;
                oneParameter = true ;
            }
            parameter += "title=" + formData['title'] ;
        }

        if (formData['author'] !== "") {
            if (oneParameter) {
                parameter += "&" ;
            }
            else {
                parameter += "?" ;
                oneParameter = true ;
            }
            parameter += "author=" + formData['author'] ;
        }

        if (formData['releaseYear'] !== "") {
            if (oneParameter) {
                parameter += "&" ;
            }
            else {
                parameter += "?" ;
                oneParameter = true ;
            }
            parameter += "year=" + formData['releaseYear'] ;
        }

        if (formData['genre'] !== "") {
            if (oneParameter) {
                parameter += "&" ;
            }
            else {
                parameter += "?" ;
                oneParameter = true ;
            }
            parameter += "genre=" + formData['genre'] ;
        }

        const res = await fetch("http://localhost:8081/documentResearch" + parameter) ;
        const data = await res.json() ;
        setDocumentsResearched(data) ;
    }

    const connectAccount = (account) => {
        setConnectedAccount(account) ;
        console.log(account.type) ;
        if (account.type === "Client") {
            fetchBorrowings(account.id) ;
            navigate("/client") ;
        }
        else if (account.type === "Employee") {
            navigate("/employee") ;
        }


        console.log(connectedAccount) ;
    }

    const returnBorrowing = async (ids) => {
        await fetch("http://localhost:8081/returnBorrowing", {
            method : 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(ids)
        }) ;
        setDocuments(await fetchDocuments()) ;
        await fetchBorrowings(ids[0]) ;
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
        fetchBorrowings(ids[1]) ;
    }

    const fetchBorrowings = async (id) => {
        const res = await fetch('http://localhost:8081/client/' + id) ;
        const data = await res.json() ;
        setBorrowings(data) ;
    }

    const createDvd = async (dvd) => {
        const res = await fetch('http://localhost:8081/createDVD',
            {
                method : 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(dvd)
            });
        const data = await res.json() ;
        setDocuments([...documents, data]) ;
    }

    const createCd = async (cd) => {
        const res = await fetch('http://localhost:8081/createCD',
            {
                method : 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(cd)
            });
        const data = await res.json() ;
        setDocuments([...documents, data]) ;
    }

    const createBook = async (book) => {
        const res = await fetch('http://localhost:8081/createBook',
            {
                method : 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(book)
            });
        const data = await res.json() ;
        setDocuments([...documents, data]) ;
    }

    const createClient = async (client) => {
        const res = await fetch('http://localhost:8081/createClient',
            {
                method : 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(client)
            });
        const data = await res.json() ;
        setAccounts([...accounts, data]) ;
    }

  return (
    <div>
      <header>
        <h1>Bibliotheque</h1>
          <h1>{connectedAccount === "no account connected" ? connectedAccount : connectedAccount.firstName}</h1>
          <p>{connectedAccount === "no account connected" ? <div></div> : <Link to='/client'>client page</Link>}</p>
          <Link to='/'>landing page</Link>
      </header>
        <Routes>
          <Route path="/" element={<LandingPage accounts={accounts} connection={connectAccount}/>}/>
            <Route path="/documents" element={<DocumentList account={connectedAccount} documents={documents} borrow={borrow}/>}/>
            <Route path='/client' element={<BorrowingsList account={connectedAccount} borrowings={borrowings} returnBorrowing={returnBorrowing}/>}/>
            <Route path='/employee' element={<EmployeePage/>}/>
            <Route path='/createDVD' element={<CreateDVD createDvd={createDvd}/>}/>
            <Route path='/createCD' element={<CreateCD createCd={createCd}/>}/>
            <Route path='/createBook' element={<CreateBook createBook={createBook}/>}/>
            <Route path='/createClient' element={<CreateClient createClient={createClient}/>}/>
            <Route path='/documentResearch' element={<DocumentResearch documentsResearched={documentsResearched} fetchResearchedDocuments={fetchResearchedDocuments} account={connectedAccount} borrow={borrow}/> }/>
        </Routes>
    </div>
  );
}

export default App;
