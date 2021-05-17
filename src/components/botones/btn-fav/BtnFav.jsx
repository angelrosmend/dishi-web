import React, { useContext, useRef, useState } from 'react'
import { Fragment } from 'react'
import { ContextUser } from '../../../context/UserContext'
import CustomTooltip from '../../tooltip/CustomTooltip'

function BtnFav({id, prodInfo, tienda, reversed}) {
    const {FAVORITOS_VALUES} = useContext(ContextUser)
    const {favItems, addToFav, removeFromFav} = FAVORITOS_VALUES

    const isFav = favItems.map(item => item.id).includes(id)
    
    const {USER_VALUES} = useContext(ContextUser)
    const {logged} = USER_VALUES
    const [showTooltip, setShowShowTooltip] = useState(false);
    const toggleTooltip = () => setShowShowTooltip(!showTooltip)

    const refAdd = useRef(null)
    const refRemove = useRef(null)

    if(tienda || !logged)return null
    return (
        <Fragment>
       { isFav ?
       <Fragment>
            <i ref={refRemove}
               className={`fas fa-heart ${reversed ? "btn-like-prod-reversed btn-active-reversed" : "btn-like-prod btn-active"}`}
               onClick={()=> removeFromFav(prodInfo)}
               onMouseEnter={toggleTooltip}
               onMouseLeave={toggleTooltip}
               />
            <CustomTooltip target={refRemove}
                           show={showTooltip}
                           placement="left"
                           reversed={reversed}>
                Remover de <br /> mis favoritos
            </CustomTooltip>
        </Fragment>
        :
        <Fragment>
            <i ref={refAdd}
               className={`far fa-heart ${reversed ? "btn-like-prod-reversed" : "btn-like-prod"}`}
               onClick={()=> {addToFav(prodInfo)}}
               onMouseEnter={toggleTooltip}
               onMouseLeave={toggleTooltip}/>
             <CustomTooltip target={refAdd}
                            show={showTooltip}
                            placement="left"
                            /* reversed={reversed} */>
                Agregar a <br /> mis favoritos
            </CustomTooltip>
           
        </Fragment>}
        </Fragment>
    )
}

export default BtnFav
