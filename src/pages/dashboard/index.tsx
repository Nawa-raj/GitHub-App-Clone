import React, { useEffect } from 'react'
import { axiosGet } from 'services/api/requestMethods';
import { showMessage } from 'services/messageService';
import "styles/DashboardStyle.scss";
import InfoSection from './InfoSection';

const Dashboard = () => {

    // init data...
    const init = async () => {
        const res = await axiosGet({ url: "/search/repositories?q=hello&sort=forks&order=asc&page=12" });
        if (res.status === 200) {
            console.log("success response: ", res.successRes);
            showMessage({ autoHideTime: 4, messageType: "success" })
        } else { console.log("error response: ", res.errorRes) }
    }

    useEffect(() => {
        let isSuscribe = true;
        if (isSuscribe) {
            init()
        }

        return () => { isSuscribe = false }
    }, []);


    return (
        <React.Fragment >

            <InfoSection />

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