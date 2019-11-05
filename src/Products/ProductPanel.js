import React from 'react';

const ProductPanel = ({ product }) => {


    return (
    <div className=" col-sm-12 col-md-6 col-lg-4">
        <div className="product-panel mb-4">
        <div className="product-image w-100" 
         style={{background: `url(${product.image}) no-repeat center center / contain`}}
        >
     
            <div className="h-100 options-container">
                <div className="h-50 d-flex align-items-center justify-content-center details-option">MORE INFO</div>
                <div className="h-50 d-flex align-items-center justify-content-center cart-option">BUY THIS</div>
            </div>
            
        </div>
        <div className="p-2">
            <p className="m-0"><b>{product.name}</b></p>
            <p className="m-0">{product.price}</p>
        </div>
        </div>
    </div>
    )
}


export default ProductPanel