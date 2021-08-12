import "./Post.css"

export default function Post({item}) {
    return (
        <div className={'singlePost'}>
            <div>
                {item.id}. <i>Title:</i> {item.title}
            </div>
            <p><i>Body:</i> {item.body}</p>

        </div>
    );
}