import React from 'react'
import { useHistory } from 'react-router'

function NavLinkMobile(props) {
    
    const {link, toggle} = props

    const history = useHistory()

    const handleLink = () => {
        toggle()
        history.push(link)
    }
    return (
        <li className="sidemenu-link"
            onClick={handleLink}>
           <p>{props.children}</p>
        </li>
    )
}

export default NavLinkMobile
