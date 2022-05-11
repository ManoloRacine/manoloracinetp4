import React from "react";

const CreateCD = ({createCd}) => {

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

        createCd(obj) ;
    }

    return (
        <form onSubmit={submit}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label>
                            CD name :
                            <input type="text" name="name" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            CD author :
                            <input type="text" name="author" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            CD release year :
                            <input type="number" name="releaseYear" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            CD number available :
                            <input type="number" name="nbAvailable" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            CD genre :
                            <input type="text" name="genre" required/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            CD number of minutes :
                            <input type="number" name="nbMinutes" required/>
                        </label>
                    </td>
                </tr>
                </tbody>
            </table>
            <input type="submit" value="create"/>
        </form>
    )
}

export default CreateCD;