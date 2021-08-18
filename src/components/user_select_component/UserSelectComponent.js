import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.services";

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
            <select onChange={select}>
                {
                    users.map(value => <option value={value.id} key={value.id}>{value.id}.{value.name}</option>)
                }
            </select>
        </div>
    );
}