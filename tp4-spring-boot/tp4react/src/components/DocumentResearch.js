import React from 'react';
import DocumentDescription from "./DocumentDescription";

const DocumentResearch = ({account, borrow, fetchResearchedDocuments, documentsResearched}) => {

    const submit = async (event) => {
        event.preventDefault() ;
        const form = document.querySelector('form') ;
        let obj = Object.values(form).reduce((obj,field) => {
            if (field.name !== "") {
                obj[field.name] = field.value;
            }
            return obj ;
        }, {}) ;

        fetchResearchedDocuments(obj) ;

    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>
                    titre :
                    <input type="text" name="title"/>
                </label>
                <label>
                    auteur :
                    <input type="text" name="author"/>
                </label>
                <label>
                    année :
                    <input type="number" name="releaseYear"/>
                </label>
                <label>
                    genre :
                    <input type="text" name="genre"/>
                </label>
                <input type="submit" value="research"/>
            </form>
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
                {documentsResearched !== "no research made" ? documentsResearched.map((document) => <DocumentDescription
                    document={document} account={account} borrow={borrow}/>)
                    : <p>no research made</p>}
                </tbody>

            </table>
        </div>
    )

}

export default DocumentResearch ;