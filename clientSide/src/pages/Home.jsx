import React from 'react'
import Head from '../components/Head'
import Step from '../components/Step'
import Backsilder from '../components/Backsilder'
import Testinomail from '../components/Testinomail'
import Upload from '../components/Upload'


const Home = () => {
  return (
    <div>
     <Head/>
     <Step/>
     <Backsilder />
     <Testinomail/>
     <Upload/>
    </div>
  )
}

export default Home