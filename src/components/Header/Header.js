import React from 'react'

import '../Header/Header.css'

const Header = (props) => {
    return(
        <div className="box-title">
            <h1 className="title">{props.greeting}</h1>
            <p className="parraf">{props.parraf}</p>
        </div>

        
    )
}


export default Header