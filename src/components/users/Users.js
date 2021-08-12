import {getUsers} from "../../services/users.service";
import {useEffect, useState} from "react";
import User from "../user/User";
import "./Users.css"

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => {
            setUsers([...value]);
        });
    },[])

    return (
        <div className={'users'}>
            {
                users.map((userItem) => <User item={userItem} key={userItem.id}/>)
            }

        </div>
    );
}