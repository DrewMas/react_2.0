import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service";
import Post from "../post/Post";
import {Route} from "react-router-dom";
import PostDetails from "../post_details/PostDetails";
import './Posts.css'

export default function Posts(props) {

    let {match: {url}} = props;

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (
        <div className={'wrap'}>
            <div className={'postDetailsBox'}>
                <Route path={`${url}/:id`}
                       render={(props) => <PostDetails {...props}/>

                       }/>
            </div>
            <div className={'allPosts'}>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}
