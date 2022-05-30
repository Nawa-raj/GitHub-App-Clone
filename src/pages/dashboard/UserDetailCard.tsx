import FallBackLoading from 'components/Loader';
import { getDate } from 'functions/common';
import { userDetailModel } from 'models/userModels';
import React, { useEffect, useState } from 'react';
import { BiGitRepoForked } from 'react-icons/bi';
import { GoGistSecret } from 'react-icons/go';
import { axiosGet } from 'services/api/requestMethods';
import { showMessage } from 'services/messageService';

interface Props {
    userName: string;
}

const UserDetailCard = ({ userName }: Props) => {
    const [state, setState] = useState<userDetailModel>();
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        setLoading(true);
        const res = await axiosGet<userDetailModel>({ url: `/users/${userName}` });
        if (res.successRes.status === 200) {
            setState(res.successRes.data);
            setLoading(false);
        } else {
            showMessage({ autoHideTime: 2, messageType: "error", message: String(res.errorRes.statusText) })
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userName) getUser();
    }, [userName])



    return (
        <React.Fragment>
            <div className="me-md-3 px-2 px-md-3 repo_card_wrapper">
                <FallBackLoading isLoading={loading} style={{ minHeight: "300px" }}>
                    <div className="bg-dark shadow-sm mx-auto card_container" style={{ width: "90%", height: "350px", borderRadius: "21px 21px 0 0" }}>
                        <div className='card_container_wrapper'>
                            <div className='image_wrapper'>
                                <img src={state?.avatar_url} alt={state?.name} />
                            </div>
                            <div className='name'>{state?.name}</div>

                            <div className='info_container'>
                                <div className='iconpanel d-flex justify-content-center gap-4'>
                                    <div >
                                        <p className='icon'><BiGitRepoForked size={30} /></p>
                                        <p className='ms-1'>{state?.public_repos}</p>
                                    </div>

                                    <div >
                                        <p className='icon'><GoGistSecret size={30} /></p>
                                        <p className='ms-1'>{state?.public_gists}</p>
                                    </div>

                                    <div >
                                        <p className='icon'>Followers</p>
                                        <p className='ms-1'>{state?.followers}</p>
                                    </div>

                                    <div >
                                        <p className='icon'>Following</p>
                                        <p className='ms-1'>{state?.following}</p>
                                    </div>
                                </div>

                                <div className='textpanel'>
                                    <div className='my-2 p-2 border border-primary rounded'>
                                        <span className='icon'>Joined Date : </span>
                                        <span className='ms-2'>{getDate(state ? state.created_at : "")}</span>
                                    </div>

                                    <div className='my-2 p-2 border border-primary rounded'>
                                        <span className='icon'>Updated At : </span>
                                        <span className='ms-2'>{getDate(state ? state.updated_at : "")}</span>
                                    </div>

                                    {state && state.company ? (
                                        <div className='my-2 p-2 border border-primary rounded company'>
                                            <p className='icon'>Company :</p>
                                            <span className='ms-2'>{state?.company}</span>
                                        </div>
                                    ) : null}

                                    {state && state.bio ? (
                                        <div className='my-2 p-2 border border-primary rounded company'>
                                            <p className='icon'>Short Bio :</p>
                                            <span className='ms-2'>{state?.bio}</span>
                                        </div>
                                    ) : null}

                                    <a className='mt-2 btn btn-outline-primary w-100' href={state?.html_url} target="_blank" rel="noreferr">Visit Profile</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </FallBackLoading>

                <div className="mb-2 p-2 text_wrapper">
                    <h2>User Details<small>{ }</small></h2>
                    <p className="lead">Connect the world with git members</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserDetailCard