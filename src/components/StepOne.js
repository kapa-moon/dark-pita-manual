

const StepOne = () => {

    return (
        // <span>{props.number}</span>
        <div className="StepOne">
            <p style={paraStyling}>Step 2</p>
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

export default StepOne;