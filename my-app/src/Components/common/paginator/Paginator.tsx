import React, { useState } from "react"
import styles from "./Paginator.module.css"


export type PropsType = {
    pageSize: number
    totalCounts: number
    portionSize: number
    currentPage: number
    onPageChange: (currentPage: number) => void
}

const Paginator: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalCounts / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)

    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (

        <div className={styles.paginatorFlex}>
            <div className={styles.butnArrow}>
                {portionNumber > 1 &&
                    <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            </div>
            <div>
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span key={p} onClick={(e) => { props.onPageChange(p) }}
                            className={props.currentPage === p ? styles.selectPage : undefined}>{p}</span>
                    })}
            </div>
            <div className={styles.butnArrow}>
                {portionCount > portionNumber &&
                    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
            </div>
        </div>
    );
}

export default Paginator;




