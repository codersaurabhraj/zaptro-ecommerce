import React, { useState, useEffect, useRef } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


const Nav = ({ cart }) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!menuRef.current.contains(event.target)) {
                closeMenu()
            }
        }
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])


    return (
        <>
            <div className='nav-bar'>

                <div className='nav-logo'>

                    <Link to='/'><h2><span style={{ color: "green" }}>Z</span>aptro</h2></Link>
                </div>


                <div ref={menuRef} >

                    <div className="menu-icon" onClick={(() => setMenuOpen(!menuOpen))}>
                        {
                            menuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>
                        }

                    </div>


                    <div className={menuOpen ? 'nav-link active' : 'nav-link'}>
                        <Link to='/shop' onClick={closeMenu}>Shop</Link>
                        <Link to='/newarrival' onClick={closeMenu}>New Arrivals</Link>
                        <Link to='/bestseller' onClick={closeMenu}>Best Sellers</Link>
                        <Link to='/about' onClick={closeMenu}>About</Link>
                        <Link to='/contact' onClick={closeMenu}>Contact</Link>
                        <Link to="/cart" onClick={closeMenu}>
                            <i className="ri-shopping-cart-2-line"></i>
                            <span>{cart}</span>
                        </Link>
                    </div>

                </div>





            </div>

        </>
    )
}

export default Nav
