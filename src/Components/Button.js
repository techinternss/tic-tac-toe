function Button(props){
    return(
        <div>
            <button className="btn">{props.name} {props.data}</button>
        </div>
    )
}

export default Button;