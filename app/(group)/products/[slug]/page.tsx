// import React from 'react'

const page = ({ params }) => {
  return (
    <main>
      <h1> Products Page</h1>
      <h2>The Product in the Page is {params.slug}</h2>
    </main>
  );
};

export default page;
