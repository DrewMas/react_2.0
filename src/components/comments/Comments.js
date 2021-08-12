import Comment from '../comment/Comment';

export default function Comments({comments}) {
    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}