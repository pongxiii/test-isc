import React from "react"
import {RiNotification3Line} from "react-icons/ri";
import {BiUserCircle} from "react-icons/bi";
import {TfiAngleDown} from "react-icons/tfi";
import './AppHeader.css'


const AppHeader = () => {
  return (
    <React.Fragment>
    <section>
        <section>
            <div className='bgHeader'>
                <div>
                    <RiNotification3Line className='notify'></RiNotification3Line>
                </div>

                <div className='account'>
                    <BiUserCircle className='user-box'></BiUserCircle>
                    <h3>Krit</h3>
                    <TfiAngleDown className='arrow'/>
                </div>
            </div>
        </section>
    </section>
</React.Fragment>
  )
}


export default AppHeader