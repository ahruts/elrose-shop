import React from "react";
import { NavLink } from "react-router-dom";
import { CgCloseR } from "react-icons/cg";

function ProductCartModal({children, onClick}) {
    return (
<div className="modal">
        <div className="product-cart-modal">
                <p className="size-required-modal__title">{children}</p>
                <CgCloseR onClick={onClick} className="size-required-modal__close-btn" />
            </div>
        </div>
    );
}

export default ProductCartModal