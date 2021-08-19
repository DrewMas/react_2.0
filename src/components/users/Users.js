import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.services";
import User from "../user/User";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div className={'usersPage'}>
            <h2>All Users</h2>

            <div>
                {
                    users.map(value => <User key={value.id} item={value}/>)
                }
            </div>

        </div>
    );
}