import React from 'react'
import { Link } from 'react-router-dom'

import cardImg1 from '../assets/images/thunderstorm-3440450.jpg'
import cardImg2 from '../assets/images/earth-1756274.jpg'
import cardImg3 from '../assets/images/iceland-2111811.jpg'
import Card from './Card'

const Home = () => {
    const demoData = [
        {
            title: "Card Title 1",
            body: "That was a very beautiful scenario which has an amazing effect on view",
            linkText: "Link 1",
            cardImg: cardImg1
        },
        {
            title: "Card Title 2",
            body: "That was a very beautiful scenario which has an amazing effect on view",
            linkText: "Link 2",
            cardImg: cardImg2
        },
        {
            title: "Card Title 3",
            body: "That was a very beautiful scenario which has an amazing effect on view",
            linkText: "Link 3",
            cardImg: cardImg3
        }
    ]
    return (
        <div className='d-flex flex-wrap'>
            {
                demoData.map((data, index) => (
                    <Card title={data.title} body={data.body} linkText={data.linkText} cardImg={data.cardImg} />
                ))
            }
        </div>
    )
}

export default Home
