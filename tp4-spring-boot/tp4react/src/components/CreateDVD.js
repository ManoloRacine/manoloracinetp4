import React from "react";

const CreateDVD = ({createDvd}) => {

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

        createDvd(obj) ;
    }

    return (
        <form onSubmit={submit}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label>
                            DVD name :
                            <input type="text" name="name"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            DVD author :
                            <input type="text" name="author"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            DVD release year :
                            <input type="number" name="releaseYear"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            DVD number available :
                            <input type="number" name="nbAvailable"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            DVD genre :
                            <input type="text" name="genre"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            DVD number of minutes :
                            <input type="number" name="nbMinutes"/>
                        </label>
                    </td>
                </tr>
                </tbody>
            </table>
            <input type="submit" value="create"/>
        </form>
    )
}

export default CreateDVD;