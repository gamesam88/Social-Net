import React, { useState } from "react";
import style from "./Users.module.css"
import Preloader from "../../Components/common/preloader/Preloader"
import User from "./User";

const Users = (props) => {

    const portionSize = 10

    let pagesCount = Math.ceil(props.totalCounts / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize



    let fetchState = () => {
        if (props.isFetching) {
            return <Preloader />
        }
    }
    return (
        < div >
            <div className={style.paginatorFlex}>
                <div className={style.butnArrow}>
                    {portionNumber > 1 &&
                        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
                </div>
                <div>
                    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {
                            return <span key={p} onClick={(e) => { props.onPageChange(p) }}
                                className={props.currentPage === p && style.selectPage}>{p}</span>
                        })}
                </div>
                <div className={style.butnArrow}>
                    {portionCount > portionNumber &&
                        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
                </div>
            </div>
            <div>
                {fetchState()}
            </div>
            <User {...props} />
        </div >)
}

export default Users

