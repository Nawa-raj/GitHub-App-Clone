import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "styles/HeaderStyle.scss";

const Header = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    // const [searchOption, setSearchOption] = useState("");

    const handleSearch = () => {
        navigate(`/search/repositories?q=${searchQuery}`, { state: { searchQuery: searchQuery } });
    }

    return (
        <nav className="navbar header_bg_dark">
            <div className='container-fluid mx-4 py-2'>
                <a className="navbar-brand" href="/">
                    <img src="/github.png" alt="github icon" width="30" height="30" />
                </a>

                <div className="d-flex input_container">
                    <div className="input-group justify-content-start align-items-end">
                        {/* <div className="d-block">
                            <label className="fw-bold" htmlFor="search_by"><small>Search By</small></label>
                            <select
                                className="form-select"
                                aria-label="Search By"
                                id="search_by"
                                style={{ height: "2.4rem" }}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setSearchOption(e.target.value);
                                }}
                            >
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div> */}

                        <div className="ms-2">
                            {/* <label className="fw-bold" htmlFor="search_by"><small>Search Query</small></label> */}
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search Repositories..."
                                aria-label="Search"
                                id="query_panel"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearchQuery(e.target.value) }}
                            />
                        </div>
                        <button className="btn btn-outline-primary" type="button" style={{ height: "2.4rem" }} onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header