import React from 'react'
import TopNavbar from '../Routers/TopNavbar'
import HeroSection from './HeroSection'
import RecognitionSection from './RecognitionSection'
import TaskPlannerSection from './TaskPlannerSection'
import UnifiedTeamSection from './UnifiedTeamSection'
import TestimonialSection from './TestimonialSection'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
        <TopNavbar/>
        <HeroSection/>
        <RecognitionSection/>
        <TaskPlannerSection/>
        <UnifiedTeamSection/>
        <TestimonialSection/>
        <Footer/>
    </div>
  )
}

export default LandingPage