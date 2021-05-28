import React from 'react'

function ContadorTiendas({count, categoria}) {
    return (
     <div className="row text-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
        <div className="col-12 pb-2 pb-xl-5">
               {count ? 
                categoria ?
               <h3 className="tienda-brand-h3">
                     Hay 
                   <span className="tienda-brand-blue ml-2"> 
                        {count} 
                        {count < 2 ? " tienda" : " tiendas"} 
                   </span>
                   {` de ${categoria} `}
                     en tu ciudad!
                   </h3>
                   :
                   <h3 className="tienda-brand-h3">
                       Conocé las tiendas cercanas en tu ciudad!
                   </h3>
               :
               <h3 className="tienda-brand-h3">No logramos encontrar tiendas en este momento</h3>
               }
        </div>
     </div>
    )
}

export default ContadorTiendas
