import "./Character.css"
export default function Character({name, surname, age, info, photo}) {

    return (
        <div className={'char'}>
            <h2>{name} {surname}, {age} years old</h2>
            <p>{info}</p>
            <img src={photo} alt=""/>
        </div>
    );
}