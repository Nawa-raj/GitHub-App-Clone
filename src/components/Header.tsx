import "styles/HeaderStyle.css"

const Header = () => {
    return (
        <nav className="navbar header_transparent">
            <div className='container-fluid mx-4 py-2'>
                <a className="navbar-brand" href="/">
                    <img src="/github.png" alt="github icon" width="30" height="30" />
                </a>
                <form className="d-flex" role="search">
                    <div className="input-group me-2">
                        <div className="d-flex b--white">
                            <p>Search BY</p>
                            <select
                                className="form-select"
                                aria-label="Search By"
                                id="search_by"
                            >
                                <option selected>Sealect Search By</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Header