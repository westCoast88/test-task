import React from "react";
import './App.css';

type formPropsType = {
    addNewUser: (newUserObj:newUserObjType) => void,
}

export interface newUserObjType {
    name:string,
    surname:string,
    email:string
}

const Form = (props: formPropsType) => {
    
    let [nameFieldState, setNameFieldState] = React.useState('');
    let [surNameFieldState, setsurNameFieldState] = React.useState('');
    let [emailFieldState, setEmailFieldState] = React.useState('');

    // валидация поля по кол-ву символов
    function validateDataFiel(value:string){
        let val = value.trim()
        if(val.length >= 3 && val.length <= 15){
            return true
        }
    }

    function addUserHandler(name:string, surname:string, email:string){
        if(validateDataFiel(nameFieldState) && validateDataFiel(surNameFieldState) && validateDataFiel(emailFieldState)){
            let newUserObj:newUserObjType = {
                name: name,
                surname: surname,
                email: email,
            }
    
            setNameFieldState('')
            setsurNameFieldState('')
            setEmailFieldState('')
    
            props.addNewUser(newUserObj)
        }else{
            alert(`Длинна для каждого поля должна составлять от 3 до 15 символов!`)
        }

        
    }

    return (
        <form className="form">
            <input type="text" placeholder="name"
                value={nameFieldState}
                onChange={(e) => setNameFieldState(e.currentTarget.value)} />

            <input type="text" placeholder="surname"
                value={surNameFieldState}
                onChange={(e) => setsurNameFieldState(e.currentTarget.value)} />

            <input type="text" placeholder="e-mail"
                value={emailFieldState}
                onChange={(e) => setEmailFieldState(e.currentTarget.value)}
            />
            <button type="button" onClick={() => addUserHandler(nameFieldState, surNameFieldState, emailFieldState)}>
                Добавить &#128204;
            </button>
        </form>
    )
}

export default Form