import {useEffect, useState} from "react";
import {getComments} from "../../services/api.services";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments() {

    const [comments, setComments] = useState([]);
    const [commentDetails, setCommentDetails] = useState(null);

    useEffect(() => {
        getComments().then(value => {
            setComments([...value]);
        })
    }, []);

    const chosenComment = (c) => {
        setCommentDetails({...c});
    }

    return (
        <div className={'commentsWrap'}>
            <div className={'comments'}>
                {
                    comments.map(value => <Comment
                        key={value.id}
                        item={value}
                        chosenComment={chosenComment}
                    />)
                }
            </div>

            {
                commentDetails && <div className={'commentDetails'}>{JSON.stringify(commentDetails.body)}</div>
            }
        </div>
    );
}