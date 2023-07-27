import React from "react";
import Table from "./Table"
import Form from "./Form";
import { newUserObjType } from "./Form";


export type userDescrType = {
    id: string,
    name: string,
    surname: string,
    email: string
}

const ManagementList = () => {
    let initialList = getData()

    type listStateType = Array<userDescrType> | null

    let [listState, setListState] = React.useState<listStateType>(initialList);

    // сохранение в localStorage
    function saveData(data: listStateType) {
        // console.log(">> сохранились в localStorage")
        localStorage.setItem("userList", JSON.stringify(data));
    }

    // получение данных из localStorage
    function getData() {
        let data: null | string = localStorage.getItem("userList")
        let answer = data && JSON.parse(data)
        // console.log(">> из localStorage", answer)
        return answer
    }

    // генерит случ. айдишник
    function getNewId() {
        return Math.round(Math.random() * 10000)
    }

    // добавление нового пользователя
    function addNewUser(newUserObj: newUserObjType) {
        let newUser = {
            id: getNewId().toString(),
            ...newUserObj,
        }

        let newListState

        if (listState === null) {
            newListState = [newUser]
        } else {
            newListState = [...listState, newUser]
        }

        setListState(newListState)
        saveData(newListState)
    }

    // удаление пользователя
    function removeUser(id: string) {
        if (listState !== null) {
            const resultList = listState.filter((user) => user.id !== id)
            setListState(resultList)
            resultList.length===0 ? saveData(null) : saveData(resultList)
        }
    }

    return (
        <div className="ManagementList__container">

            <Form addNewUser={addNewUser} />
            {initialList ? <Table listState={listState} removeUser={removeUser} /> : <h5>Тут пока пусто, начните заполнять таблицу</h5>}
        </div>
    )
}

export default ManagementList