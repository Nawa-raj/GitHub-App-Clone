import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "styles/DashboardStyle.scss";
import Dashboard from './dashboard';


// dashboard index page...
const PageIndex = () => {
    const navigate = useNavigate();

    // useEffect(() => { navigate("GitHub-App-Clone", { replace: true }) }, []);

    return (
        <React.Fragment >
            <Dashboard />
        </React.Fragment>
    )
}

export default PageIndex