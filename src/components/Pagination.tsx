import React, { useEffect, useState } from 'react'

// interface 
interface Props {
    itemPerPage: number;
    totalItems: number;
    onPageNumberChange: (val: number) => void;
    currentPageNo: number;
}

const Pagination = ({ currentPageNo, itemPerPage, totalItems, onPageNumberChange }: Props) => {
    const [totalPageNumbers, setTotalPageNumbers] = React.useState(1);
    const [showPageList, setShowPageList] = useState([1, 2, 3, 4, 5]);


    useEffect(() => {
        const page = Math.ceil(totalItems / itemPerPage);
        if (page <= 0) setTotalPageNumbers(1);
        else setTotalPageNumbers(page);
        // setCurrentPageNo(currPageNo);        

    }, [totalItems, itemPerPage])

    useEffect(() => {
        const newlist = [currentPageNo - 2, currentPageNo - 1, currentPageNo, currentPageNo + 1, currentPageNo + 2];
        if (currentPageNo > 3) setShowPageList(newlist);
    }, [currentPageNo])


    const handleNext = () => {
        if (totalPageNumbers > currentPageNo) {
            const newlist = showPageList.map((val) => val + 1);
            onPageNumberChange(currentPageNo + 1)
            setShowPageList(newlist)
        }
    }

    const handlePrevious = () => {
        if (currentPageNo > 2) {
            const newList = showPageList.map((val) => val - 1);
            onPageNumberChange(currentPageNo - 1)
            setShowPageList(newList)
        } else if (currentPageNo == 2) {
            onPageNumberChange(1)
        }
    }


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={currentPageNo <= 1 ? "page-item disabled" : "page-item"} onClick={handlePrevious}><span className="page-link">Previous</span></li>
                {showPageList.map((item) => {
                    return <li
                        className={currentPageNo === item ? "page-item active" : "page-item"}
                        key={item}
                        onClick={() => onPageNumberChange(item)}
                    >
                        <span className="page-link">{item}</span>
                    </li>;
                })}
                <li className={currentPageNo === totalPageNumbers ? "page-item disabled" : "page-item"} onClick={handleNext}><span className="page-link">Next</span></li>
            </ul>
        </nav>
    )
}

export default Pagination