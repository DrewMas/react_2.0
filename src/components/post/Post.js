import "./Post.css"
import {useEffect, useState} from "react";
import {getPostComments} from "../../services/services";
import Comments from "../comments/Comments";

export default function Post({post:{id, title, body}}) {

    let [comments, setComments] = useState([]);

    useEffect(()=> {
        getPostComments(id).then(({data}) => setComments(data));
    },[id]);

    return (
        <div className={'singlePost'}>
            <h3>{id}. {title}</h3>
            <p>{body}</p>
            <Comments comments={comments}/>
        </div>
    );
}