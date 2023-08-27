import React from 'react'
import HomeInroComponent from '../components/HomeInroComponent'
import ListingCopmonent from '../components/ListingComponent'
import SidePanel from '../components/SidePanel'

function HomePage() {
  return (
    <div className='mx-24'>
        <HomeInroComponent></HomeInroComponent>
        <ListingCopmonent></ListingCopmonent>
        <SidePanel></SidePanel>
    </div>
  )
}

export default HomePage