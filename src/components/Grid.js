import React from 'react'
import './Grid.css'

const Grid = (props) => {
    const {children} = props;
  return (
    <div className='grid'>
        {children}
    </div>
  )
}

export default Grid