import React from 'react'

function Search() {
    return (
    <div className="search-wrapper hide-sm-screen">
        <input className="" id="myInput" type="text" placeholder="Qué estás buscando?"/>
        <span className="search-button">
                <i className="fa fa-search"></i>
        </span>
    </div>
/*     <div className="col-6">
        {/* {  <!-- <input className="form-control search form-search" id="myInput" type="text" placeholder="Qué estás buscando?">
         <span className="fa fa-search"></span> -->} }
         <div id="custom-search-input">
            <div className="input-group col-md-12">
                <input className="form-control search form-search" id="myInput" type="text" placeholder="Qué estás buscando?"/>
                <span className="input-group-btn">
                    <button className="btn btn-info btn-lg" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </div>
</div> */


    )
}

export default Search
