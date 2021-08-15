export default function User({item,chosenUser}) {

    const onClickUserChoose = () =>{
        chosenUser(item);
    }

    return (
        <div>
            <div>{item.id}. {item.name}</div>
            <button onClick={onClickUserChoose}>Details</button>
        </div>
    );
}