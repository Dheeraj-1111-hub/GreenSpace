import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import yard from '../assets/hq720.jpg'
import office from '../assets/office.webp'
import commercial from '../assets/commercial.webp'
import Hero2 from '../components/hero2'
import BeforeAfter from '../components/BeforeAfter'
import Schedule from '../components/Schedule'
import Timeline from '../components/Timeline'
import { FileUpload } from '../components/file-upload'
import Footer from '../components/Footer'
const Home = () => {
  const timelineData = [
    {
      title: "Upload Your Space",
      date: "Step 1",
      description: "Take a picture of your available space and upload it to our platform.",
      logos:"https://i.pinimg.com/564x/f6/a7/af/f6a7afb0a2e890fcff243f5a814d6fab.jpg",
    },
    {
      title: "Analyze & Optimize",
      date: "Step 2",
      description: "Our AI analyzes your space and suggests optimal green placements.",
      logos:"https://img.freepik.com/free-vector/sustainability-environmental-logo-vector-with-text_53876-112074.jpg",
    },
    {
      title: "Get Weather Insights",
      date: "Step 3",
      description: "We fetch real-time weather data to recommend suitable plants.",
      logos:"https://homesteadontherange.com/wp-content/uploads/2021/04/5e011-clouds-5368435_1280.jpg",
    },
    {
      title: "Recommendations",
      date: "Step 4",
      description: "Receive a curated list of plants and layout designs tailored to your space.",
      logos:"https://www.localseotactics.com/wp-content/uploads/2020/04/tips-survive-coronavirus-businesses.jpg",
    },
    {
      title: "Transform Your Space",
      date: "Step 5",
      description: "Implement the suggested green changes and enjoy your eco-friendly space!",
      logos:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/3/20/0/shutterstock_sansevieria-trifasciata-snake-plant-window-modern-1813119916.jpg.rend.hgtvcom.1280.853.85.suffix/1647788697049.webp",
    },
  ];
  
  
  return (
    <div>
      
      <Navbar />
      <Hero />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      <Cards img={yard} title='Home Gardens' desc='Create your perfect garden sanctuary with our expert design solutions and sustainable practices.' />
      <Cards img={office} title='Office Spaces' desc='Transform your workplace with biophilic design solutions that boost productivity and well-being.' />
      <Cards img={commercial} title='Commercial' desc='Enhance your commercial space with sustainable green solutions that attract and delight customers.' />
      </div>
      <Hero2 />
      <div className="w-full mx-auto pt-20">
            <div className="text-center mb-16 items-center justify-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Before & After Transformations</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    See the dramatic changes we've achieved in transforming spaces into beautiful, sustainable
                    environments.
                </p>
            </div>
      </div>
      <BeforeAfter />
      <Schedule />
      <Timeline data={timelineData} />
      <div className="w-full mx-auto pt-20">
            <div className="text-center mb-16 items-center justify-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Upload Your Space</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                Upload an image of your space, and our AI will suggest the best greenery options to enhance it. Whether it’s a balcony, backyard, or rooftop, we’ll help you create a sustainable and beautiful green space!
                </p>
            </div>
      </div>
      <FileUpload />
      <Footer />
    </div>
  )
}

export default Home
