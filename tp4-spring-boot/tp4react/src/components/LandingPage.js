import React from 'react'
import UserConnection from "./UserConnection";
import {Link} from "react-router-dom";

const LandingPage = ({accounts, connection}) => {
    return (
        <div>
            <h3>Landing page</h3>
            <Link to='/documents'>documents</Link>
            <div></div>
            <Link to='/documentResearch'>research documents</Link>
            <table>
                <thead>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>type</th>
                    <th>connection</th>
                </tr>
                </thead>
                <tbody>
                {accounts.map((account) => <UserConnection connection={connection} key={account.id} account={account}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default LandingPage