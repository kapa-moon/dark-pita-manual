

const Contact = () => {

    return (
        // <span>{props.number}</span>
        <div className="StepOne">
            <h3 style={titleStyling}>Q&A</h3>
            <ul style={listStlying}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>



    )

}

const paraStyling = {
    width: '60%',
}
const listStlying = {
    listStyleType: 'none',
    lineHeight: '1.9'
}
const titleStyling = {
    color: '#64340B',
    marginRight: '10px',
    fontWeight: '300'
}

export default Contact;