import React from 'react'

const mode = () => {
  return (
    
   <>
   <div className="switch-box">
  <label id="switch" className="switch">
    <input type="checkbox" onchange="toggleTheme()" id="slider" />
    <span className="slider round" />
  </label>
</div>

   </>

  )
}

export default mode