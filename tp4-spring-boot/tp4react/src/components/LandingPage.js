import React from 'react'
import UserConnection from "./UserConnection";
import {Link} from "react-router-dom";

const LandingPage = ({accounts, connection}) => {
    return (
        <div>
            <h4>Landing page</h4>
            <Link to='/documents'>documents</Link>
            <table>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>connection</th>
                </tr>
                {accounts.map((account) => <UserConnection connection={connection} key={account.id} account={account}/>)}
            </table>
        </div>
    )
}

export default LandingPage