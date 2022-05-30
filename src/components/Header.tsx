import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "styles/HeaderStyle.scss";

const Header = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    // const [searchOption, setSearchOption] = useState("");

    const handleSearch = () => {
        navigate(`/search/repositories?q=${searchQuery}`, { state: { searchQuery: searchQuery } });
    }

    var imageSrc = "/github.png";
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
        imageSrc = "github.png";
    }

    return (
        <nav className="navbar header_bg_dark">
            <div className='container-fluid mx-4 py-2'>
                <Link className="navbar-brand" to={"/"}>
                    <img src="/github.png" alt="github icon" width="30" height="30" />
                </Link>

                <div className="d-flex input_container">
                    <div className="input-group justify-content-start align-items-end">
                        <div className="ms-2">
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