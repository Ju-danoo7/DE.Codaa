export default function (props) {
    return (
        <div className="memes">
            <img src={props.image} alt="meme-image" />
            <div className="displays">
                <p>{props.top}</p>
                <p>{props.bottom}</p>
            </div>
        </div>
    )
}