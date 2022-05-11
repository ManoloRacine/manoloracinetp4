import React from "react";

const CreateBook = ({createBook}) => {

    const submit = async (event) => {
        event.preventDefault() ;
        const form = document.querySelector('form') ;
        let obj = Object.values(form).reduce((obj,field) => {
            if (field.name !== "") {
                obj[field.name] = field.value;
            }
            return obj ;
        }, {}) ;
        console.log(obj) ;

        createBook(obj) ;
    }

    return (
        <form onSubmit={submit}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label>
                            Book name :
                            <input type="text" name="name" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Book author :
                            <input type="text" name="author" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Book release year :
                            <input type="number" name="releaseYear" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Book number available :
                            <input type="number" name="nbAvailable" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Book genre :
                            <input type="text" name="genre" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            Book number of pages :
                            <input type="number" name="nbOfPages" required/>
                        </label>
                    </td>
                </tr>
                </tbody>
            </table>
            <input type="submit" value="create"/>
        </form>
    )
}

export default CreateBook;