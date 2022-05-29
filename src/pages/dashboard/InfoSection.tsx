
const InfoSection = () => {
    return (
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

                <div className="col-xs-12 col-md-6 d-flex justify-content-end">
                    <div className='d-flex justify-content-center align-item-center md-me-2'>
                        <div className='logo_circle'>
                            <div className="img_wrapper">
                                <img src="/github_logo_big.png" alt="git logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InfoSection;
