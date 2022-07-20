import { useState } from "react";


import Product from "./Product";
import productList from '../styles/productList.module.css'
import { Pagination } from "./Pagination";

export function ProductList({ products }) {

  const [posts] = useState(products)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  // Get current posts.
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className={productList.container}>
      <div className={productList.products}>
        {currentPosts.map(el => <Product key={el.id} data={el} />)}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}