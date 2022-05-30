import FallBackLoading from 'components/Loader'
import { truncate } from 'functions/StringManupulation'
import { responseItemType } from 'models/reposModels'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "styles/SearchResultStyle.scss"
import DetailExtra from "./DetailExtra"
import ReadMeContainer from "./ReadMeContainer"

const RepoDetails = () => {
    const location = useLocation();
    const propsData = location.state as responseItemType;

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 200);

    return (
        <FallBackLoading isLoading={loading} loadingTime={8}>
            < div className="my-3 px-sm-2 px-md-3 px-lg-5 repoDetail_container">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col col-xs-12 col-sm-7 col-md-6">
                                <div className="name">{truncate(propsData.full_name ? propsData.full_name : "", 30, "...")}</div>
                            </div>

                            <div className="col col-xs-12 col-sm-5 col-md-6 d-flex justify-content-md-end">
                                <a href={propsData.html_url} target="_blank" rel='noreferrer' className="btn btn-outline-primary">Open in GitHub</a>
                            </div>
                        </div>

                        <div className='row g-2 mt-1'>
                            <div className="col col-xs-12 col-sm-4 col-md-3">
                                <div className="reo_info_wrapper">
                                    <span className="title">Default Brance</span>
                                    <span className='text-muted'>{propsData.default_branch}</span>
                                </div>
                            </div>

                            <div className="col col-xs-12 col-sm-4 col-md-3">
                                <div className="reo_info_wrapper">
                                    <span className="title">Forks</span>
                                    <span className='text-muted'>{propsData.forks_count}</span>
                                    {/* <span className='ms-2 text-capitalize'>Forks Allowed: <span className='text-muted'>{String(propsData.fork)}</span></span> */}
                                </div>
                            </div>

                            <div className="col col-xs-12 col-sm-4 col-md-3">
                                <div className="reo_info_wrapper">
                                    <span className="title">Watches</span>
                                    <span className='text-muted'>{propsData.watchers_count}</span>
                                </div>
                            </div>

                            <div className="col col-xs-12 col-sm-4 col-md-3">
                                <div className="reo_info_wrapper">
                                    <span className="title">Open Issues</span>
                                    <span className='text-muted'>{propsData.open_issues_count}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card-body detail_wrapper">
                        <div className="row g-5">
                            <ReadMeContainer {...propsData} />
                            <DetailExtra {...propsData} />
                        </div>
                    </div>
                </div>
            </div>
        </FallBackLoading>
    )
}

export default RepoDetails