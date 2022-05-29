import { Loader } from 'components/Loader';
import Pagination from 'components/Pagination';
import { isEmpty } from 'functions/StringManupulation';
import { searchReposType } from "models/reposModels";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosGet } from 'services/api/requestMethods';
import { showMessage } from 'services/messageService';
import "styles/SearchResultStyle.scss";
import MiniCard from './MiniCard';


interface datatype {
    option?: string;
    searchQuery: string
}

const SearchResult = () => {
    const location = useLocation();
    const propsData = location.state as datatype;

    // local states...
    const [sortBy, setSortBy] = useState({ option: "", query: "" });
    const [perPage, setperPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [searchData, setSearchData] = useState<searchReposType>();
    const [currentPageNo, setCurrentPageNo] = useState(1);

    // const data 
    const placeholderValue = {
        sortBy: ">=500, <50, =30",
        forks: ">=500, <50, =30",
        update: () => {
            if (sortBy.query === "updated") return "Select Last Updated Date";
            else if (sortBy.query === "created") return "Select Created Date";
            else return "Select last Pushed Date";
        }
    }

    const dateOptionList = ["created", "pushed", "updated"];
    const inputOptionList = ["stars", "forks"]
    const sortOptionList: string[] = inputOptionList.concat(dateOptionList);
    const itemPerPageOption: number[] = [10, 25, 50];

    // init data...
    const init = async (searchOption?: string) => {
        setLoading(true);

        if (searchOption) {
            const res = await axiosGet<searchReposType>({ url: `/search/repositories?q=${propsData.searchQuery}&${searchOption}` });
            if (res.status === 200) {
                setSearchData(res.successRes.data);
                setLoading(false);
                showMessage({ autoHideTime: 2, messageType: "success", message: "Data Successfully Obtained" });
            } else { console.log("error response from search page: ", res.errorRes) }
        } else {
            const res = await axiosGet<searchReposType>({ url: `/search/repositories?q=${propsData.searchQuery}` });

            if (res.status === 200) {
                setSearchData(res.successRes.data);
                setLoading(false);
                showMessage({ autoHideTime: 2, messageType: "success", message: "Data Successfully Obtained" });

            } else { console.log("error response from search page: ", res.errorRes) }
        }

    }

    useEffect(() => { init(); setCurrentPageNo(1) }, [location.state]);


    // handle filter show
    const handleFilter = () => {
        if (sortOptionList.includes(sortBy.option) && isEmpty(sortBy.query)) {
            showMessage({ messageType: "error", autoHideTime: 2, message: "Sort Query Can't be empty" });
            return;
        }

        let q = "";
        if (!isEmpty(sortBy.query)) {
            if (sortBy.option === "update") q += `${sortBy.option}=${sortBy.query}`;
            else q += `${sortBy.option}=${sortBy.query}`
        };
        if (!isEmpty(perPage)) q += `&per_page=${perPage + 1}`;
        if (!isEmpty(currentPageNo)) q += `&page=${currentPageNo}`

        if (!isEmpty(q)) init(encodeURIComponent(q));
    }


    // handle page number change...
    const handlePageNoChange = (pageNo: number) => {
        setCurrentPageNo(pageNo);
        init(encodeURIComponent(`&page=${currentPageNo}`));
    }


    if (loading) return (
        <div
            className="d-flex align-items-center justify-content-center m-auto"
            style={{ minHeight: "90vh" }}>
            <Loader />
        </div>
    )

    return (
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row filter_row'>
                    <div className="col-xs-12 col-sm-6 d-flex align-items-center">
                        <div className='info_wrapper w-100'>
                            <p><strong>Total Search Matches: </strong><span className='ps-2 fw-bold text-muted'>{searchData ? searchData.total_count : 0} Items</span></p>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="input-group mb-3 d-flex justify-content-end align-items-end">
                            <div className='w-40'>
                                <label htmlFor="sortby_option" className="form-label">Sort By</label>
                                <select
                                    className="form-select w-100"
                                    aria-label="Default select example"
                                    onChange={(e) => setSortBy({ ...sortBy, option: e.target.value })}
                                    id="sortby_option"
                                >
                                    <option value={""} >Select...</option>
                                    {sortOptionList.map((val, ind) => {
                                        return <option value={val} key={ind}>{val}</option>
                                    })}
                                </select>
                            </div>

                            <div className='ms-1'>
                                {/* <small>Sort By</small> */}
                                {dateOptionList.includes(sortBy.option) ? (
                                    <>
                                        <label htmlFor="sortby_option" className="form-label">{placeholderValue.update()}</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="basic-url"
                                            aria-describedby="basic-addon3"
                                            onChange={(e) => setSortBy({ ...sortBy, query: e.target.value })}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="basic-url"
                                            aria-describedby="basic-addon3"
                                            onChange={(e) => setSortBy({ ...sortBy, query: e.target.value })}
                                            placeholder={`Search Like ${placeholderValue.sortBy}`}
                                        />

                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-2 col-md-2">
                        <div className="input-group mb-3 d-flex justify-content-end align-items-end">
                            <div >
                                <label htmlFor="item_per_page" className="form-label">Item Per Page</label>
                                <select
                                    className="form-select w-100"
                                    aria-label="Default select example"
                                    onChange={(e) => setperPage(Number(e.target.value))}
                                    id="item_per_page"
                                >
                                    <option value={""} >Select...</option>
                                    {itemPerPageOption.map((val) => {
                                        return <option value={val} key={val}>{val}</option>
                                    })}
                                </select>
                            </div>
                            <button className='btn btn-outline-primary ms-1' type='button' onClick={handleFilter}>Show</button>

                        </div>

                    </div>
                </div>

                <div className='mb-5 mt-1 row gx-3 gy-5 reasult_card'>                    {
                    searchData && searchData?.items.length > 0 ? (
                        searchData.items.map((item) => {
                            return (
                                <div className="col-xs-12 col-md-6 col-lg-4" key={item.id}>
                                    <MiniCard {...item} />
                                </div>
                            )
                        })
                    ) : (
                        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "50vh" }}>
                            <p className='fw-bold'>No Matches Found</p>
                        </div>
                    )
                }
                </div>

                <div className='row pagination_row'>
                    <div className="col-xs-12 d-flex justify-content-end" >
                        <Pagination
                            itemPerPage={perPage}
                            currentPageNo={currentPageNo}
                            totalItems={searchData ? searchData.total_count : 1}
                            onPageNumberChange={(cPageNumber) => handlePageNoChange(cPageNumber)}

                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchResult