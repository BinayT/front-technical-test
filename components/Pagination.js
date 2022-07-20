import React from 'react'
import paginationStyles from '../styles/pagination.module.css'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let x = 1; x <= Math.ceil(totalPosts / postsPerPage); x++) {
        pageNumbers.push(x)
    }

    return (
        <nav>
            <ul className={paginationStyles.pagination}>
                {pageNumbers.map(el => (
                    <li key={el} className={paginationStyles.page}>
                        <a onClick={() => paginate(el)} className={paginationStyles.pageLink}>
                            {el}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}