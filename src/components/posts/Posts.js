import Post from "../post/Post";

export default function Posts({posts}) {
    return (
        <div>
            {
                posts.map(value => {
                    return <Post key={value.id} post={value}/>;
                })
            }
        </div>
    );
}