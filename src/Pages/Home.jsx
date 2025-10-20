import React from 'react'
import ThemeToggle from '@/component/ThemeToggle';
import StarBackground from '@/component/StarBackground'
import Navbar from '@/component/Navbar'
import HeroSection from '@/component/HeroSection'
import AbouteSection from '@/component/AbouteSection'
import SkillsSection from '@/component/SkillsSection'
import ProjectsSection from '@/component/ProjectsSection'
import ContactSection from '@/component/ContactSection'
import Footer from '@/component/Footer'



const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle  />
        {/* background effects */}
        <StarBackground />
        {/* Navbar  */}
          <Navbar />
        {/* Main content */}
        <HeroSection/>
        <AbouteSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>


        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home