import {useEffect, useState} from "react";
import {getComments} from "../../services/api.services";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    }, []);

    return (
        <div>
            <h2 className={'commentsTitle'}>All Comments</h2>
            <div className={'commentsPage'}>
                {
                    comments.map(value => <Comment key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}