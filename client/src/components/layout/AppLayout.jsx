import React from 'react'
import Title from '../../shared/Title'

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return(
        <>
            <Title/>
            {/* <div>header</div> */}
            <WrappedComponent {...props}/>
        </>
    )
  }
}

export default AppLayout
