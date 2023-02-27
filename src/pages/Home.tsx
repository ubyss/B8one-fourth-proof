import React from 'react'
import { useParams } from 'react-router-dom'
import ContentBar from '../components/Home/ContentBar'
import Main from '../components/Home/Main'
import Topbar from '../components/Home/Topbar'

const Home = () => {

  let { state } = useParams();

  return (
    <>
        <Topbar />
        <ContentBar />
        <Main state={state ?? ''}/>
    </>
  )
}

export default Home