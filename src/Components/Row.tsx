import React from "react";
import { userDescrType } from "./ManagementList";
import './App.css';

type UserItemPropsType = {
    el: userDescrType,
    removeUser: (id:string) => void,
}

const Row = (props:UserItemPropsType) => {
    return (
        <tr className="userList__row">
            <td>{props.el.name}</td>
            <td>{props.el.surname}</td>
            <td>{props.el.email}</td>
            <td><button type="button" onClick={() => {props.removeUser(props.el.id)}}>Удалить &#10060;</button></td>
        </tr>
    )
}

export default Row


// @ts-ignore