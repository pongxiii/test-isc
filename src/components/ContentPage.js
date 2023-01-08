import React, { useEffect, useState } from 'react'
import data from '../data/example_data.json'
import { Link } from 'react-router-dom';
import LayoutPage from './LayoutPage';
import './ContentPage.css';
import Box from './Box';
import Grid from './Grid';
import calendar from '../asserts/calendar.png';


const ContentPage = () => {
  const [contents, setContents] = useState([]);

  const dataJson = [...data]
  const getContents = () => {
    setContents(dataJson)
  }

  useEffect(() => {
    getContents();
    console.log(dataJson)
    console.log('Loading api already.')
  }, []);

  const contentsElements = contents.slice(0,9).map(contents => {
    return (
      <section key={contents.id}>
        <Link to={`/restaurant/${contents.id}`}>
        <Box >
            <img className='profile' src={contents.profile_image_url}></img>
            <p className='name'>{contents.name}</p>
            <img className='calendar' src={calendar}></img>

            <span className='time-open'>
              {contents.operation_time[0].time_open} AM - {contents.operation_time[0].time_close} PM
            </span>

            <span className='ratings'> &#x2022; {contents.rating}</span>

            <div className='row-img'>
              <div class="inline-block">
                <img className='left-img' src={contents.images[0]}></img>
              </div>

              <div class="inline-block">
                <img className='mid-img' src={contents.images[1]}></img>
              </div>

              <div class="inline-block">
                <img className='right-img' src={contents.images[2]}></img>
              </div>
            </div>
        </Box>
        </Link>
      </section>
    )
  })
  return (
    <LayoutPage>
      <Grid>
        {contentsElements}
      </Grid>
    </LayoutPage>
  )
}

export default ContentPage