import React from "react";

const ProgressBar = (props) => {
    const {bgcolor,completed} = props;

    const containerStyles = {
        height: 2,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginTop: 0,
        marginRight: 5
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        maxWidth: '100%',
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}></span>
            </div>
        </div>
    );
};

export default ProgressBar;