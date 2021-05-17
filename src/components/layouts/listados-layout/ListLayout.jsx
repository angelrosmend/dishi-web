import React from 'react'

function ListLayout({children}) {
    return (
        <div className="container container-fluid">
                <div className="col-10 m-auto m-sm-auto ">
                    {children}
                </div>
        </div>
    )
}

export default ListLayout
