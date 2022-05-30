import { truncate } from 'functions/StringManupulation';
import { userListModel } from 'models/userModels';
import React from 'react';


interface Props {
    userList: userListModel[];
    handleUserClick: (val: string) => void;
}

const UserCard = ({ userList, handleUserClick }: Props) => {

    return (
        <React.Fragment>
            <div className="me-md-3 px-2 px-md-3 pt-3 user_card_wrapper">
                <div className="my-2 py-2">
                    <h2>Connect To Git Users</h2>
                    <p className="lead">Click on user list to view user details in next panel</p>
                </div>

                <div className="bg-light shadow-sm mx-auto card_container" style={{ width: "90%", height: "350px", borderRadius: "21px 21px 0 0" }}>
                    <div className='card_container_wrapper'>
                        {
                            userList.map((val) => {
                                return (
                                    <div className='info_wrapper' key={val.id} onClick={() => handleUserClick(val.login)}>
                                        <div>
                                            <img src={val.avatar_url} alt={val.login} />
                                        </div>

                                        <div className='info'>
                                            <div className="name">{truncate(val.login, 15, "...")}</div>

                                            <div className='w-100 d-flex justify-content-between '>
                                                <span className='text-capitalize text-muted'><strong>Click to see Details</strong></span>
                                                <a href={val.html_url} target="_blank" rel='noreferrer' className="btn btn-sm btn-outline-primary">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default UserCard