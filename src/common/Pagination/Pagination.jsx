import React, {useState} from 'react';
import styles from './Pagination.module.css';

export const Pagination = React.memo(({totalCount, pageSize, currentPage, onPageChanged, portionSize}) => {

    let pagesCount = Math.ceil(totalCount / pageSize)

    let pageNums = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageNums.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    let pages = pageNums.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
            if (currentPage === p) {
                return <span key={p} className={styles.active}>{p}</span>
            } else {
                return <span key={p} onClick={() => {
                    onPageChanged(p)
                }}>{p}</span>
            }
        })
    console.log('Pagination')
    return <div className={styles.pagination}>
        {portionNumber > 1 && <span onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>&laquo;</span>}
        {pages}
        {portionCount > portionNumber && <span onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>&raquo;</span>}
    </div>
});

export default Pagination;