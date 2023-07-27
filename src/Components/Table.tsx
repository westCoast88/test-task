import React from "react";
import { userDescrType } from "./ManagementList"
import Row from "./Row";

type listPropType = {
    listState: Array<userDescrType> | null,
    removeUser: (id:string) => void,
}

const Table = (props: listPropType) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>E-mail</th>
                    <th>action</th>
                </tr>
                {props.listState && props.listState.map(el => <Row el={el} key={el.id} removeUser={props.removeUser}/>)}
            </tbody>
        </table>
    )
}

export default Table