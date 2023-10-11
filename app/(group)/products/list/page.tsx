import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <h1> Here is the List of Products</h1>

      <ul className="products">
        <li>
          <Link href="/products/bats">Bats</Link>
        </li>
        <li>
          <Link href="/products/gloves">Gloves</Link>
        </li>
        <li>
          <Link href="/products/pads">Pads</Link>
        </li>
        <li>
          <Link href="/products/accessories">Accessories</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
