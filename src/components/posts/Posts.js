import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.services";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (
        <div>
            <h2 className={'postsTitle'}>All Posts</h2>
            <div className={'postsPage'}>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}