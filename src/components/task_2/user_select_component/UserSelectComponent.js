import {useEffect, useState} from "react";
import {getUsers} from "../../../services/api.services.task2";

export default function UserSelectComponent({getPosts}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    })

    const select = (e) =>{
        getPosts(e.target.value);
    };

    return (
        <div>
            <h2>Choose a user</h2>
            <select onChange={select}>
                {
                    users.map(value => <option value={value.id} key={value.id}>{value.id}.{value.name}</option>)
                }
            </select>
        </div>
    );
}