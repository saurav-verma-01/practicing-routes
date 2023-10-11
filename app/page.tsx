import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>

      <div className="card-container">
        <div className="card">
          <h2>
            Checkout the <Link href="/products/list">Products</Link>
          </h2>
        </div>
        <div className="card">
          <h2>
            Checkout the <Link href="/orders/list">Orders</Link>
          </h2>
        </div>
      </div>
    </main>
  );
}
