import React from 'react'
import isc from '../asserts/logo.PNG'
import place from '../asserts/place.PNG'
import './SideBar.css'


const SideBar = () => {
    return (
        <React.Fragment>
            <section>
                <div>
                    <img src={isc} c alt="ISC logo"></img>
                    <hr></hr>
                    <div className='place'>
                        <section>
                            <img src={place} alt="place logo"></img>
                            <p>Place</p>
                        </section>
                    </div>
                    <hr></hr>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SideBar