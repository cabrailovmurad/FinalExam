import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/HomeSections/Header'
import Section2 from '../../Components/HomeSections/Section2'
import Section3 from '../../Components/HomeSections/Section3'
import Section4 from '../../Components/HomeSections/Section4'


const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
    <main>
      <Header/>
      <Section2/>
      <Section3/>
        <Section4/>
        
    </main>
    </>
  )
}

export default Home