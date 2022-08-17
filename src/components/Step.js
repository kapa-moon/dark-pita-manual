import React, { Component } from 'react';
// import './Step.css';


const Step = (props) => {

    return (
        // <span>{props.number}</span>
        <div>
            <div className='title'>
                <h3 style={titleStyling}>{props.title}</h3>
            </div>
            <div className='Content' style={contentStyling}>
                {/* <img style={picStyling} src={props.image} />
                <img style={picStyling} src={props.image} />
                <p style={paraStyling}>{props.content}</p>
                <img style={picStyling} src={props.image} />
                <img style={picStyling} src={props.image} />
                <img style={picStyling} src={props.image} /> */}

            </div>

        </div>



    )

}

const titleStyling = {
    color: '#64340B',
    marginRight: '10px',
    fontWeight: '300'
}

const picStyling = {
    borderRadius: '8px',
    width: '30%',
    height: '25%',
}
const contentStyling = {
    display: 'flex'

}

const paraStyling = {
    width: '60%',
}

export default Step;