import {useEffect, useState} from "react";
import {getUsersPost} from "../../services/services";

export default function User({item: {id, name, username}}) {

    // const [posts, setPosts] = useState([]);
    //
    // useEffect(()=> {
    //     getUsersPost(id).then(({data}) => {
    //         setPosts([...data]);
    //         console.log(data);
    //     })
    // },[]);

    return (
        <div>
            <div>{id}. {name}</div>
            <p>{username}</p>


        </div>
    );
}