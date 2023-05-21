import React from 'react'
import HomeInroComponent from '../components/HomeInroComponent'
import ListingCopmonent from '../components/ListingComponent'

function HomePage() {
  return (
    <div className='mx-24'>
        <HomeInroComponent></HomeInroComponent>
        <ListingCopmonent></ListingCopmonent>
    </div>
  )
}

export default HomePage