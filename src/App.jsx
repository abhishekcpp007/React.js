// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

import Footer from "./components/footer";

import Navbar from "./components/Navbar";

import Card from "./components/card";


function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      
<Navbar/>
<div className="card">

<Card title="card 1" description="card 1 now the way"/>
<Card title="card 2" description="card 2 now the way"/>
<Card title="card 3" description="card 3 now the way"/>
<Card title="card 4" description="card 4 now the way"/>
<Card title="card 5" description="card 5 now the way"/>
</div>
<Footer/>






    </>
  )
}

export default App
