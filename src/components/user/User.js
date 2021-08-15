import {useEffect, useState} from "react";
import {getUsersPost} from "../../services/services";
import Posts from "../posts/Posts";
import "./User.css"

export default function User({user: {id, name, username}}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsersPost(id).then(({data}) => {
            setPosts([...data]);
        })
    }, [id]);

    return (
        <div className={'singleUser'}>
            <h2>{id}. {name} <br/>
                Username - {username}
            </h2>
            <Posts posts={posts}/>

        </div>
    );
}