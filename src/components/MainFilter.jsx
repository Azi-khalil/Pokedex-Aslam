import React from 'react'
import '../styles/MainFilter.css'

function MainFilter({filterOptions}) {

    const types = ['normal','water','grass','electric','ice','ghost','dark','dragon','fairy','fighting','poison','ground','flying','psychic','rock','steel','bug']

    return (
        <div className='radioContainer containerWrapper'>
            {types.map((type) => {
                return (
                    <div className='radioBtn'>
                        <input type="radio" name="type" value={type} onChange={(e) => filterOptions(e)} />
                        <label>{type}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default MainFilter