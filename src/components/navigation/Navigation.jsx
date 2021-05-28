import React from 'react'
import { Fragment } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

function Navigation() {
    return (
        <Fragment>
            <Header/>
            <Sidebar/>
        </Fragment>
    )
}

export default Navigation
