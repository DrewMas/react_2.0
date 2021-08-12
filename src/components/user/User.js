import "./User.css"

export default function User({item}) {
    return (
        <div className={'singleUser'}>{item.id}. {item.name} - {item.username}</div>
    );
}