import '../comments/Comments.css'

export default function Comment({item: {id, title, body}}) {
    return (
        <div className={'singleComment'}>
            <span className={'commentBackgroundColor'}>{id}. {title}</span>
            <p className={'commentBackgroundColor'}>{body}</p>
        </div>
    );
}