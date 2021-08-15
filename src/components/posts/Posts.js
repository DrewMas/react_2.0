import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.services";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value]);
        })
    }, [])

    const chosenPost = (p) => {
        setPostDetails({...p})
    }

    return (
        <div className={'postsWrap'}>
            <div className={'posts'}>
                {
                    posts.map(value => <Post
                        key={value.id}
                        item={value}
                        chosenPost={chosenPost}
                    />)
                }
            </div>

            {
                postDetails && <div className={'postDetails'}>{JSON.stringify(postDetails.body)}</div>
            }
        </div>
    );
}