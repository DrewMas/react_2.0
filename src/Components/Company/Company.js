export default function Company({companyName, catchPhrase, bs}) {
    return (
        <div>
            <h3>Company:</h3>
            <div>Name: {companyName}</div>
            <div>Catch phrase: {catchPhrase}</div>
            <div>BS: {bs}</div>
        </div>
    );
}