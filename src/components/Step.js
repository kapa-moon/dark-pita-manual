import React, { Component } from 'react';
// import './Step.css';


const Step = (props) => {

    return (
        // <span>{props.number}</span>
        <div>
            <div className='title'>
                <h3 style={titleStyling}>{props.title}</h3>
            </div>
            <div className='content' style={contentStyling}>
                <p style={paraStyling}>{props.content}</p>
                <img style={picStyling} src={props.image} />

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
    width: '320px',
    height: '180px',
}
const contentStyling = {
    display: 'flex'

}

const paraStyling = {
    width: '60%',
}

export default Step;