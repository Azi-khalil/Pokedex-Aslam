import React from 'react'
import '../styles/MainNav.css'
import {Filter,X} from 'react-bootstrap-icons'
import {useState} from 'react'
import MainFilter from './MainFilter'


function MainNav({search,notFound,empty,filterOptions}) {
    const [showFilter,setShowFilter] = useState(false)
    const [searchResult,setSearchResult] = useState('')

    const toggleFilter = () => {
        setShowFilter(!showFilter)
    }
    return (
        <nav className='containerWrapper'>
            <div className='navContainer'>
                <div className='welcomeContainer'>
                    <h1>Welcome<br />
                        to the<br />
                        <strong>Pokedex.</strong>
                    </h1>
                </div>
                <div className='detailsContainer'>
                    <div>
                        <h3>The comprehensice database of Pokemon <br />
                            from the original Blue and Red version <br />
                            <strong>find your favourite and check out their stats.</strong>
                        </h3>
                    </div>
                    <div className='searchContainer'>
                        <input type='text' size='100' placeholder='Search the Pokedex' onChange={(e) => setSearchResult(e.target.value.toLocaleLowerCase())} />
                        <button onClick={() => search(searchResult)}>SEARCH</button>
                    </div>
                    {empty ? <span style={{color: "red"}}>Fill in search Bar!</span> : ''}
                    {notFound ? <span style={{color: "red"}}>Pokemon Not Found! Type in correct name</span> : ''}
                </div>
            </div>
            <div className='filterContainer '>
                <div className='filterIcon'>
                    <div onClick={() => toggleFilter()}>
                        {showFilter ? <X size="40" /> : <Filter size="40" />}
                    </div>
                    <span>Filter Pokemon</span>
                </div>
                {showFilter ? <MainFilter filterOptions={filterOptions} /> : ''}
            </div>
        </nav>
    )
}

export default MainNav