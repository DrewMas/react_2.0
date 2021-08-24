import './PostDetiles.css'

export default function PostDetails({location: {state}}) {

    let {id, body} = state;

    return (
        <div className={'singlePost'}>
            <div>{id}. Post body: {body}</div>
        </div>
    );
}
