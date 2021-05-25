import React from 'react'

function ContadorTiendas({count, categoria}) {
    return (
     <div class="row text-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
        <div class="col-12 pb-2 pb-xl-5">
               {count ? 
               <h3 class="tienda-brand-h3">
                     Hay 
                   <span class="tienda-brand-blue ml-2"> 
                        {count} 
                        {count < 2 ? " tienda" : " tiendas"} 
                   </span>
                   {categoria && ` de ${categoria}`}
                     en tu ciudad!
                   </h3>
               :
               <h3 class="tienda-brand-h3">No logramos encontrar tiendas en este momento</h3>
               }
        </div>
     </div>
    )
}

export default ContadorTiendas
