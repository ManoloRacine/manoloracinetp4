import React from "react";

const CreateClient = ({createClient}) => {

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

        createClient(obj) ;
    }

    return (
        <form onSubmit={submit}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label>
                            first name :
                            <input type="text" name="firstName"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            last name :
                            <input type="text" name="lastName"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            password :
                            <input type="text" name="password"/>
                        </label>
                    </td>
                </tr>
                </tbody>
            </table>
            <input type="submit" value="create"/>
        </form>
    )
}

export default CreateClient;