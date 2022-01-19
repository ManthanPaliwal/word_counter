const Alert = (props) => {
    return (
        props.alert && <div className={"alert alert-success d-flex align-items-center"} role="alert">
            <svg className="bi flex-shrink-0 me-2" width="10" height="10" role="img" aria-label="Success:"></svg>
            <div>
                <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>
        </div>
    )
}
export default Alert;