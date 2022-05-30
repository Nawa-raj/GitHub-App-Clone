import { getDate } from 'functions/common';
import { replaceEmpty } from 'functions/StringManupulation';
import { responseItemType } from 'models/reposModels';
import { userDetailModel } from 'models/userModels';
import { useEffect, useState } from 'react';
import { axiosGet } from 'services/api/requestMethods';
import { showMessage } from 'services/messageService';

const DetailExtra = (props: responseItemType) => {

    // local states...
    const [state, setState] = useState<userDetailModel>();

    const init = async () => {
        const res = await axiosGet<userDetailModel>({ url: `/users/${props.owner.login}` });
        if (res.successRes.status === 200) {
            setState(res.successRes.data);
        } else {
            showMessage({ autoHideTime: 2, messageType: "error", message: String(res.errorRes.statusText) })
        }
    };

    useEffect(() => { init() }, [props]);

    return (
        <div className="col col-sm-12 col-md-4">
            <div className="row gy-4 ">
                <div className='col col-sm-12'>
                    <div className="card repo_info_card">
                        <div className="card-header">
                            Repo More Details
                        </div>

                        <div className="card-body">
                            <div className="reo_info_wrapper">
                                <span className="title">Created At</span>
                                <span className='text-muted ms-lg-4'>{getDate(props.created_at)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Pushed At</span>
                                <span className='text-muted ms-lg-4'>{getDate(props.pushed_at)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">lat Updated At</span>
                                <span className='text-muted ms-lg-4'>{getDate(props.updated_at)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Visibility</span>
                                <span className='text-muted ms-lg-4'>{props.visibility}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Allowed Fork</span>
                                <span className='text-muted ms-lg-4 text-capitalize'>{String(props.allow_forking)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Language</span>
                                <span className='text-muted ms-lg-4'>{replaceEmpty(props.language)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">License</span>
                                <span className='text-muted ms-lg-4'>{replaceEmpty(props.license?.name, "Not Mentioned")}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Clone Url</span>
                                <a href={props.clone_url} className="link-primary" target="_blank" rel="noreferrer">clone</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col col-sm-12'>
                    <div className="card user_info_card ">
                        <div className="card-header">
                            <div className='d-flex align-items-start'>
                                <img src={props.owner.avatar_url} alt={props.full_name} />

                                <div className='ps-xs-1 ps-md-2'>
                                    <div className="flex-grow-1 ">
                                        <h4 className='name'>{state?.name}</h4>
                                        <div className='d-flex gap-1 gap-lg-4'>
                                            <div className="reo_info_wrapper">
                                                <span className="title">Followers</span>
                                                <span className='text-muted'>{replaceEmpty(state?.followers)}</span>
                                            </div>

                                            <div className="reo_info_wrapper">
                                                <span className="title">Following</span>
                                                <span className='text-muted'>{replaceEmpty(state?.followers)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex gap-1 gap-lg-3'>
                                        <div className="reo_info_wrapper">
                                            <span className="title">Public Repo</span>
                                            <span className='text-muted'>{replaceEmpty(state?.public_repos)}</span>
                                        </div>

                                        <div className="reo_info_wrapper">
                                            <span className="title">public gists</span>
                                            <span className='text-muted'>{replaceEmpty(state?.public_gists)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="reo_info_wrapper">
                                <span className="title">Name</span>
                                <span className='text-muted'>{replaceEmpty(state?.name)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Company</span>
                                <span className='text-muted'>{replaceEmpty(state?.company)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Location</span>
                                <span className='text-muted'>{replaceEmpty(state?.location)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Email</span>
                                <span className='text-muted'>{replaceEmpty(state?.email)}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Created At</span>
                                <span className='text-muted'>{getDate(state ? state.created_at : "")}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Updated At</span>
                                <span className='text-muted'>{getDate(state ? state.updated_at : " ")}</span>
                            </div>

                            <div className="reo_info_wrapper">
                                <span className="title">Blog</span>
                                <a href={state?.blog} className='link-primary' target="_blank" rel="noreferrer">View Blog</a>
                            </div>
                        </div>

                        <div className='card-footer'>
                            <a href={state?.html_url} className='btn btn-sm btn-outline-primary' target="_blank" rel="noreferrer" >GitHub Profile</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailExtra