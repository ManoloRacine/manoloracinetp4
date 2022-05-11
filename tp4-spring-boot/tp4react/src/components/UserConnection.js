import React from "react";

const UserConnection = ({account, connection}) => {
    return (
        <tr>
            <td>{account.firstName}</td>
            <td>{account.lastName}</td>
            <td>{account.type}</td>
            <td><button onClick={() => connection(account)}>connect</button></td>
        </tr>
    )
}

export default UserConnection