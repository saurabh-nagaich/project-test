import "./Home.scss"
import React, { useState } from 'react'
import HeroSection from "./components/HeroSection"
import TabSection from "../../components/tab-section/TabSection"
import CardSection from "./components/CardSection"


function Test() {
  return (
    <h1>Test</h1>
  )
}

const dataSet = [
  {
    label: "Science",
    categorySlug:"science",
    // Icon: <i className="pi pi-check" style={{ "font-size": "1rem" }}></i>,
    data: [
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUr0LkU7FkVKXrYsse929PkQkrMcAqznyUbC1Nvz4mENfky4XG1WwrendVA&s",
        label: "Physics",
        slug: 'physics'
      },
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJ5ESjAXGykaYL2o_Eu2HUJC9s6CMj1DS_Q&usqp=CAU",
        label: "Chemisrty",
        slug: 'chemisrty'
      },
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09ajmofDmiAoI1yRfH6iW_7uNKGSH_ImxfA&usqp=CAU",
        label: "Biology",
        slug: 'biology'
      },
    ]

  },
  {
    label: "Math",
    categorySlug:"math",
    // Icon: <i className="pi pi-check" style={{ "font-size": "1rem" }}></i>,
    data: [
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevWCtd063I0ArsnmUlBTMPckjZl8IX5AaQw&usqp=CAU",
        label: "PreCalculus",
        slug: 'pre_calculus'
      },
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzuBqMr2l9yKukWvVRjF6BW8Qjmh5VqlPug&usqp=CAU",
        label: "Algebra 2",
        slug: 'algebra_2'
      },
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTfpgJ6AecQscP2af4SKeuC3nhrFXx3Q9Qw&usqp=CAU",
        label: "Geometry",
        slug: 'geometry'
      },
    ]
  },
  {
    label: "SocialStudies",
    categorySlug:"social_studies",
    // Icon: <i className="pi pi-check" style={{ "font-size": "1rem" }}></i>,
    data: [
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vWk9rst58DHV2c_JgnbZ2uWrr-S3yjXxcg&usqp=CAU",
        label: "Economics",
        slug: 'economics'
      },
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYHxU62WUBSenyRDTyXEPmiKKZpxSQvPcUA&usqp=CAU",
        label: "Geograpgy",
        slug: 'geograpgy'
      },
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURFPgG2L9ty7npBnNdIgzwW8boZcu9WFgLQ&usqp=CAU",
        label: "Government",
        slug: 'government'
      },
    ]
  },
]

function Home() {
  let [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='Home'>
      <HeroSection />
      <TabSection data={dataSet} activeTabIndex={activeIndex} clickHandler={setActiveIndex} activeSection={<CardSection category={dataSet[activeIndex].label} categorySlug={dataSet[activeIndex].categorySlug} data={dataSet[activeIndex].data} />} />
    </div>
  )
}

export default Home