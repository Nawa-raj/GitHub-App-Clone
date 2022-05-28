import React from 'react'
import "styles/DashboardStyle.css";


const Dashboard = () => {
    return (
        <React.Fragment >
            <div className="container-fluid box_container w-100">
                <div className="row">
                    <div className="col-xs-12 col-md-6 d-flex align-item-center m-auto">
                        <div className='p-2 ps-lg-4 git_info'>
                            <h1>Where the world builds software</h1>
                            <p>
                                Millions of developers and companies build, ship,
                                and maintain their software on GitHub—the largest and
                                most advanced development platform in the world.
                            </p>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6">
                        <div className='d-flex justify-content-center align-item-center'>
                            <div className='logo_circle'>
                                <div className="img_wrapper">
                                    <img src="/github_logo_big.png" alt="git logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
                </div>
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard