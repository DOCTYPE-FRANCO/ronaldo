import React from "react"
import { Routes, Route } from "react-router-dom"
import Homepage from "./Components/Homepage"
import Header from "./Components/Header"

function App() {
  return (
    
      <div className="min-h-screen w-full relative">
        {/* Crimson Depth */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 80% 30%, #000000 40%, #2b0707 100%)",
          }}
        />
        {/* Your Content/Components */}

        <div className="z-10">
          <Header />
          <div className="relative z-10 ">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
            </Routes>
          </div>
        </div>
      </div>
    
  )
}

export default App


