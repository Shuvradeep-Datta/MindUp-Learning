import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "flowbite-react";
import CustomNavbar from './components/CustomNavbar';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeatureSection';
import CoursesSection from './components/home/CoursesSection';
import TestimonialsSection from './components/home/TestimonialSection';
import FAQSection from './components/home/FAQSection';
import BenefitsSection from './components/home/BenifitsSection';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <HeroSection />
  <FeaturesSection />
  <CoursesSection />
  <TestimonialsSection />
  <BenefitsSection />
  <FAQSection />
  <Footer />
  </>
  )
}

export default App
