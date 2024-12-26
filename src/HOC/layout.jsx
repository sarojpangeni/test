import React from 'react'
import Navbar from '../component/Nav_bar'

function layout({children}) {
  return (
    <div>
        {/* <Navbar /> */}
        <div>
            {children}
        </div>
    </div>
  )
}

export default layout