import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";
import {match, Route} from "react-router-dom";
import UserDetails from "../user_details/UserDetails";
import './Users.css'

export default function Users({props: {match}}) {

    let {url} = match;
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
