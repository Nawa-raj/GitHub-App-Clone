import { repoDetailType, responseItemType } from 'models/reposModels'
import { useEffect, useState } from 'react';
import { axiosGet } from 'services/api/requestMethods';
import { marked } from "marked";


const ReadMeContainer = (props: responseItemType) => {

    const [state, setState] = useState<repoDetailType>();

    const init = async () => {
        const res = await axiosGet<repoDetailType>({ url: `/repos/${props.owner.login}/${props.name}/readme` });
        if (res.successRes.status === 200) {
            setState(res.successRes.data);
        } else {
            console.log(res.errorRes)
        }
    }

    useEffect(() => {
        init();
    }, [])

    let decode = window.atob(state ? state.content : "");


    return (
        <div className="col col-sm-12 col-md-8" style={{ overflow: "hidden" }}>
            <div className='me-lg-4'>
                <h5 className="card-title my-3 fs-4 ps-2">{state?.name}</h5>
                <div className='bg-light p-4'>
                    <div dangerouslySetInnerHTML={{ __html: marked(decode) }}></div>
                </div>
            </div>
        </div>
    )
}

export default ReadMeContainer;