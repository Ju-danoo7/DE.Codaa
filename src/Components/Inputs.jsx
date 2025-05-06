export default function Input(props) {


    return (
        <div className="input_div_container">
            <h1>Input Component</h1>
            <form action={props.caller} >
                <div className="input_div">
                    <label htmlFor="top-text">Top Text</label>
                    <input onChange={props.call} type="text" id="top-text" name="top" value={props.top} />
                </div>
                <div className="input_div">
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input onChange={props.call} type="text" id="bottom-text" name="bottom" value={props.bottom} />
                </div>
                <button>Click to generate picture</button>
            </form>
        </div >
    )
}