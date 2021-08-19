import '../users/Users.css'

export default function User({item:{id, name}}) {
    return (
        <div className={'singleUser'}>
            <span  className={'userBackgroundColor'}>{id}. {name}</span>
        </div>
    );
}