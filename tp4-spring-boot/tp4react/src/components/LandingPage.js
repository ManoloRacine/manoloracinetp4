import React from 'react'
import UserConnection from "./UserConnection";

const LandingPage = ({accounts, connection}) => {
    return (
        <div>
            <h4>Landing page</h4>
            <ul>
                {accounts.map((account) => <UserConnection connection={connection} key={account.id} account={account}/>)}
            </ul>
        </div>
    )
}

export default LandingPage