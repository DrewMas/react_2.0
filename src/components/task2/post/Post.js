export default function Post({post:{id,title,body}}) {
    return (
        <div>
            <span>{id}. <b>Title:</b> {title}</span>
            <p><b>Body:</b> {body}</p>
        </div>
    );
}