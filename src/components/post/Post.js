import {
    Link
} from "react-router-dom";
import './Post.css'

export default function Post({item}) {
    return (
        <div className={'postBox'}>
            <div className={'singePost'}>
                <p>{item.id}. {item.title} </p>
            </div>
            <div className={'postLink'}>
                <Link to={{pathname: `/posts/`+ item.id, state: item}}>Post details</Link>
            </div>
        </div>
    );
}
