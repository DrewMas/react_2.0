import {useParams} from "react-router";

export default function PostDetails({location:{state}}) {

    console.log(state);

    return (
        <div>
            {state.body}
        </div>
    );
}
