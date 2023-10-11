// import React from 'react'

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <p>
          {" "}
          <Link href="/">Shopper</Link>{" "}
        </p>

        <ul className="navlinks">
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/checkout">Checkout</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
