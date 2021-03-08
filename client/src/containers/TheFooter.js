import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false} style={{justifyContent: 'center'}}>
      <div >
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">ril-bit-option</a>
        <span className="ml-1">&copy; 2021 bit-option.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
