import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.services";
import User from "../user/User";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])


    const chosenUser = (u) => {
        setUser({...u});
    }

    return (
        <div className={'wrap'}>
            <div className={'allUsers'}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        chosenUser={chosenUser}
                    />)
                }
            </div>
            {
                user && <div className={'userDetails'}>{JSON.stringify(user)}</div>
            }
        </div>
    );
}