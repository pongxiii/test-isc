import React, { useEffect, useState } from 'react'
import './PageRestaurant.css'
import { useParams } from 'react-router-dom';

import data from '../data/example_data.json'
import { Button } from 'antd';
import LayoutPage from './LayoutPage';


const PageRestaurant = () => {
    const [content, setContent] = useState({});
    const { restID } = useParams();


    
    async function getContent(theRest) {
        const foundObj = await data.find(item => item.id == (theRest))
        setContent(foundObj)
    }
    


    useEffect(() => {
   
        getContent(restID)
        console.log(content);
        console.log('load json already')
    }, [])



    return (
        <div className='box-content'>
           <Button className='back-button' href='/' type="default" size='large' shape='round'>
                Back
            </Button>
            <LayoutPage>
                <div className='outer-box'>
                    <img className='profile-img' src={content.profile_image_url}></img>
                    <div className='inner-box'>
                        <div className='title-rest'>{content.name}</div>
                        <span className='ratings-rest'>&#x2022;{content.rating}</span>
                        <h4 className='address'>Address:</h4>
                        <p className='detail'>{content.address}</p>
                        <h4 className='opening-hour'>Opening Hour:</h4>
                        <div className='text-box'>
                            
                        </div>
                    </div>
                    <div className='inner-box2'>
                        Images
                    </div>
                </div >
            </LayoutPage >
        </div >
    )
}

export default PageRestaurant