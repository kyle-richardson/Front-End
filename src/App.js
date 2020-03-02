import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import LoginSignup from './components/Form'
import axios from 'axios'

const App = () => {
  //store dummy data into state
  const [peopleArr, setPeople] = useState([])

  //call from free api for dummy data
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=4')
      .then(res => setPeople(res.data.results))
  }, [])
  return (
    <>
      <Route
        exact
        path='/'
        render={() => <WelcomePage peopleArr={peopleArr} />}
      />

      <Route exact path='/signin' component={LoginSignup} />
      <Route exact path='/register' component={LoginSignup} />
    </>
  )
}

export default App
