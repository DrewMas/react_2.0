import '../posts/Posts.css'

export default function Post({item:{id, title, body}}) {
    return (
        <div className={'singePost'}>
            <span className={'postBackgroundColor'}>{id}. {title}</span>
            <p className={'postBackgroundColor'}>{body}</p>
        </div>
    );
}