import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='home'>
        <form name='contact' data-netlify="true">
          <input type="text" name="name" id="" placeholder='name' />
          <input type="text" name="surname" id="" placeholder='surname'/>
          <input type="email" name="email" id="" placeholder='email'/>
          <input type="submit" value="go" />
        </form>
    </div>
  )
}

export default App
