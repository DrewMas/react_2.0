export default function Post({item, chosenPost}) {

    const onClickChosenPost = () => {
        chosenPost(item);
    }

    return (
        <div>
            <div>{item.id}. {item.title}</div>
            <button onClick={onClickChosenPost}>Post details</button>
        </div>
    );
}