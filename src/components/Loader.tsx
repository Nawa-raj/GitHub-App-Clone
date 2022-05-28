import React from 'react'

export const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="spinner-grow text-primary" role="status" />
            <div className="ms-2 fw-semibold">Loading...</div>
        </div>
    )
}



// fallback locader props
interface fallbackLoaderProps {
    loader?: React.ReactNode;
    isLoading: boolean;
    children: React.ReactNode;
    loadingTime?: number;
}

const FallBackLoading = (props: fallbackLoaderProps) => {
    const [loading, setLoading] = React.useState(true);
    // console.log(props.isLoading)

    const getLoadingTime = () => {
        const time = props.loadingTime ? props.loadingTime * 100 : 600;
        return time;
    };

    React.useEffect(() => {
        let isSuscribe = true;
        setLoading(props.isLoading);

        if (isSuscribe && props.isLoading) {
            setTimeout(() => {
                setLoading(false);
            }, getLoadingTime());
        }

        return () => { isSuscribe = false; };
    }, [props.isLoading]);

    if (loading) {
        return (
            <div
                className="d-flex align-items-center justify-content-center m-auto"
                style={{ minHeight: "90vh" }}
            >
                {props.loader ? props.loader : (<Loader />)}
            </div>
        );
    }

    return <div>{props.children}</div>;
};

export default FallBackLoading;