import './Comment.css'

export default function Comment({comment:{id,name,body}}) {
    return (
        <div className={'singleComment'}>
            <h4>{id}. {name}</h4>
            <p><i>{body}</i></p>
        </div>
    );
}