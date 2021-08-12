import "./Comment.css"

export default function Comment({item: {id, name, body, email}}) {
    return (
        <div className={'singleComment'}>
            <div>{id}. {name}</div>
            <p>{body}</p>
            <p>{email}</p>
        </div>
    );
}