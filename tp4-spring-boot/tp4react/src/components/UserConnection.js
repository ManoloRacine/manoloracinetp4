import React from "react";
import {Link} from "react-router-dom";

const UserConnection = ({account, connection}) => {
    return (
        <tr>
            <td>{account.firstName}</td>
            <td>{account.lastName}</td>
            <td><button onClick={() => connection(account)}><Link to='/client'>connect</Link></button></td>
        </tr>
    )
}

export default UserConnection