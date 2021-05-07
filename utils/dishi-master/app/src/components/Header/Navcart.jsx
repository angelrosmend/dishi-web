import React from 'react'

function Navcart() {
    return (
        <div className="col-2 dropdown-hover">
            <a className=" dropdown-toggle" id="menu2" type="button" data-toggle="dropdown" href="#">
                <i className="fa fa-shopping-cart nav-icon-2 rounded-circle"></i>
            </a>
            <div className="dropdown-menu" role="menu" aria-labelledby="menu2">
            </div>
        </div>
    )
}

export default Navcart
