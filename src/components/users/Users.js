import {useEffect, useState} from "react";
import {getUsers} from "../../services/services";
import User from "../user/User";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers([...data])
        })
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }

        </div>
    );
}