import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {toggleBtnCart, toggleSearchForm} from "../../redux/products/products.slice"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell, faCartShopping, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'
import {CartShopping} from "../cart-shopping/CartShopping"
import {Search} from "../search/Search"
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();
    const {cart, btnCart} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const toggleCart = () => dispatch(toggleBtnCart(true))
    const toggleSearch = () => dispatch(toggleSearchForm(true))
    btnCart
        ? document.querySelector('body').style.overflow = 'hidden'
        : document.querySelector('body').style.overflow = 'visible'
    const goToLoginReg = () => {
        navigate("/LoginReg");
    }
    const goToNotification= () => {
            navigate("notification");
    
    }

    return (
        <header className='w-screen bg-[#176B87] fixed z-10 top-0 h-[50px]'>
            <div className='container text-lg flex justify-between items-center  text-white h-[50px] max-w-[1240px] m-auto px-2'>
                <a href='/' >Noble Nonprofit</a>
                <Search />
                <ul className='flex justify-between'>
                    <button className='block md:hidden mr-2 px-[8px]' onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                           <button className='block  mr-2 px-[8px] hover:bg-gray-600'
                           onClick={goToLoginReg}>
                           <FontAwesomeIcon icon={faUser} className='text-xl'/>
                           </button>
                           <button className="block mr-2 px-[8px]  hover:bg-gray-600 "onClick={goToNotification}>
                           <FontAwesomeIcon icon={faBell} className='text-xl'/>

                           </button>
                    <button className='px-[6px] py-1 rounded hover:bg-gray-600 transition relative' onClick={toggleCart}>
                        <FontAwesomeIcon icon={faCartShopping} className='text-xl'/>
                        {cart.length > 0 && <span className='absolute right-[-7px] top-0 bg-[#00a046] text-[12px] h-[10px] flex items-center justify-center px-[7px] py-[10px] rounded-full'>{cart.length}</span>}
                    </button>
                </ul>
            </div>
            {btnCart && <CartShopping cart={cart}/>}
            
        </header>
        
    )
    
}
