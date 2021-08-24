import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/api.service";

export default function UserDetails() {

    let {id} = useParams('id');

    let [user, serUser] = useState([]);

    useEffect(()=>{
        getUser(id).then(value => serUser({...value}));
    }, [id]);

    return (
        <div>
            <h4>{id}. {user.name}</h4>
            <p>{user.username} <br/> {user.email}</p>
        </div>
    );
}
