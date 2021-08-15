export default function Comment({item,chosenComment}) {

    const onClickChosenComment = ()=>{
        chosenComment(item);
    }

    return (
        <div>
            <div>{item.id}. {item.name}</div>
            <button onClick={onClickChosenComment}>Comment details</button>
        </div>
    );
}