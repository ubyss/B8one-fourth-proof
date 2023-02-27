import React from 'react'
import { useParams } from 'react-router-dom'
import ContentBar from '../components/Home/ContentBar'
import Main from '../components/Home/Main'
import StateInfo from '../components/Home/StateInfo'
import Topbar from '../components/Home/Topbar'

const Home = () => {

  let { state } = useParams();

  return (
    <>
        <Topbar />
        <ContentBar />
        {state && <StateInfo />}
        <Main state={state ?? ''}/>
    </>
  )
}

export default Home