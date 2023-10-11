import React from "react";

const page = ({ params }) => {
  return (
    <main>
      <h1> Order Page</h1>
      <h2>Order is Prepared for {params.slug}</h2>
    </main>
  );
};

export default page;
