import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])


    return (
        <div>
            <div className={'allUsers'}>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}
