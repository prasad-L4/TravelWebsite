import React from 'react'
import Navbar from '../Component/NavBar/Navbar'
import VideoSection from '../Component/VideosSection/VideoSection'
import Popular from '../Component/PopularDestinations/Popular'
import RecentTrips from '../Component/RecentTrips/RecentTrips'
import Footer from '../Component/Footer/Footer'

function Home() {
  return (
    <div>
        
        <VideoSection/>
        <Popular/>
        <RecentTrips/>
       
    </div>
  )
}

export default Home