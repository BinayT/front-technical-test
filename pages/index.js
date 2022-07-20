import React, { useState, useEffect } from 'react';

import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";
import styles from '../styles/indexStyles.module.css'

export default function Home({ data }) {
  const [products, setProducts] = useState(data.products)
  const [searchValues, setSearchValues] = useState('')
  const filteredProducts = products.filter(item => item.title.toLowerCase().includes(searchValues.toLowerCase()))

  console.log(filteredProducts)
  return (
    <div className={styles.container}>
      <Search setProducts={setProducts} setSearchValues={setSearchValues} />
      <ProductList products={products} />
    </div>
  )
}

// Server Side Rendering
export async function getServerSideProps() {
  const res = await fetch(`https://dummyjson.com/products/?limit=100`)
  const data = await res.json()

  return { props: { data } }
}

