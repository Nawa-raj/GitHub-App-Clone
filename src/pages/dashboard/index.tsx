import FallBackLoading, { Loader } from 'components/Loader';
import { userListModel } from 'models/userModels';
import React, { useEffect, useState } from 'react';
import { axiosGet } from 'services/api/requestMethods';
import { showMessage } from 'services/messageService';
import "styles/DashboardStyle.scss";
import InfoSection from './GitInfoSection';
import UserDetailCard from './UserDetailCard';
import UserCard from './UserCard';



const Dashboard = () => {
    const [state, setState] = useState<userListModel[]>([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [loading, setLoading] = useState(false);


    // init data...
    const init = async () => {
        setLoading(true)

        const res = await axiosGet<userListModel[]>({ url: "/users?per_page=15" });
        if (res.status === 200) {
            setState(res.successRes.data)
            setSelectedUser(res.successRes.data[0].login);
        } else { showMessage({ messageType: "error", autoHideTime: 3, message: String(res.errorRes.statusText) }) }

        setLoading(false)
    }

    useEffect(() => { init() }, []);



    // if (loading) return (
    //     <div
    //         className="d-flex align-items-center justify-content-center m-auto"
    //         style={{ minHeight: "90vh" }}>
    //         <Loader />
    //     </div>
    // )

    return (
        <FallBackLoading isLoading={loading}>
            <InfoSection />

            <div className='row gy-3 m-md-3 m-2 p-2'>
                <div className="col col-sm-12 col-lg-6">
                    <UserCard userList={state} handleUserClick={(val) => setSelectedUser(val)} />
                </div>

                <div className="col col-sm-12 col-lg-6 mt-5 mt-lg-0">
                    <UserDetailCard userName={selectedUser} />
                </div>
            </div>
        </FallBackLoading>
    )
}

export default Dashboard