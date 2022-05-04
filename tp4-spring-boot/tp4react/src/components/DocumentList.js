import React from 'react'
import DocumentDescription from "./DocumentDescription";
import {Link} from "react-router-dom";

const DocumentList = ({documents, account, borrow}) => {
    return (
        <div>
            <Link to='/'>landing page</Link>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>author</th>
                        <th>type</th>
                        <th>nb available</th>
                        <th>borrow</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((document) => <DocumentDescription document={document} account={account} borrow={borrow}/>)}
                </tbody>

            </table>
        </div>
    )

}

export default DocumentList ;