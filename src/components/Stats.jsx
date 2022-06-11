import React from 'react'
import ProgressBar from './ProgressBar'

function Stats({stats}) {

    const mainContainer = {
        padding: 20
    }

    const statsContainer = {
        display: "flex",
        alignItems: "center",
        marginBottom: 10,
    }

    const nameStyle = {
        fontSize: 12,
        fontWeight: 500,
        width: "100%",
        textTransform: 'capitalize'
    }

    const progressNumber = {
        fontSize: 12,
        fontWeight: 700,
    }


    return (
        <div style={mainContainer}>
            {stats.map((stat,index) => {
                return (
                    <div key={index} style={statsContainer}>
                        <label style={nameStyle}>{stat.stat.name}</label>
                        <ProgressBar completed={stat.base_stat} bgcolor={
                            stat.stat.name === "hp" ? "#00ff88" :
                                stat.stat.name === "attack" ? "#ff2e2e" :
                                    stat.stat.name === "defense" ? "#0045ff" :
                                        stat.stat.name === "special-attack" ? "#20ecf7" :
                                            stat.stat.name === "special-defense" ? "#f7f020" :
                                                stat.stat.name === "speed" ? "#fc2de7" : ""
                        } />
                        <span style={progressNumber}>{stat.base_stat}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Stats