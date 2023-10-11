// import React from 'react'

import Link from "next/link";

const page = () => {
  return (
    <main>
      <h1> Order Summary</h1>

      <ul className="products">
        <li>
          <Link href="/orders/virat-kohli">Virat Kohli</Link>
        </li>
        <li>
          <Link href="/orders/glenn-maxwell">Glenn Maxwell</Link>
        </li>
        <li>
          <Link href="/orders/rishab-pant">Rishab Pant</Link>
        </li>
        <li>
          <Link href="/orders/jasprit-bumrah">Jaspreet Bumrah</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
