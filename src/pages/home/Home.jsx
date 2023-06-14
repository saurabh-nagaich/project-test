import "./Home.scss"
import React, { useState } from 'react'
import HeroSection from "./components/HeroSection"
import TabSection from "../../components/tab-section/TabSection"
import Card from "../../components/card/Card"
import CardSection from "./components/CardSection"


function Test() {
  return (
    <h1>Test</h1>
  )
}

const dataSet = [
  {
    label: "Science",
    // Icon: <i className="pi pi-check" style={{ "font-size": "1rem" }}></i>,
    Component: <Test />
  },
  {
    label: "Math",
    // Icon: <i className="pi pi-check" style={{ "font-size": "1rem" }}></i>,
    Component: <Test />
  },
  {
    label: "SocialStudies",
    // Icon: <i className="pi pi-check" style={{ "font-size": "1rem" }}></i>,
    Component: <Test />
  },
]

function Home() {
  let [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='Home'>
      <HeroSection />
      <TabSection data={dataSet} activeTabIndex={activeIndex} clickHandler={setActiveIndex} activeSection={<CardSection />} />
    </div>
  )
}

export default Home