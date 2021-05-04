import React from 'react';
import copyUrlToClipboard from '../../../utils/copyUrlToClipboard';
import PopupModals from '../../Layouts/PopupModals/PopupModals';
import Post from './Modals/Post';
import './Users.css';


const Users = () => {
    return (
        <>
            <div class="container">
                <div class="section">
                    <div class="row">
                        <div class="col s12">
                            <h3 className="center">
                                <i class="mdi-content-send brown-text">
                                    Users
                                    <i class="material-icons" style={{ fontSize: 'inherit' }}>people</i>
                                </i>
                            </h3>
                            <hr />
                            <div class="col l6 s12">
                                <div className="response-div">
                                    <pre>
                                        {
                                            `"message": "User's Data Fetched",
"data": [
    {
        "_id": "604f7512ef9acaf15bbef1fd",
        "name": "Numan",
        "creating_date": "2021-04-25T10:15:31.834Z"
    },
    {
        "_id": "60503d68c4392e0f1cd75764",
        "name": "Num",
        "creating_date": "2021-03-16T05:08:56.729Z",
        "__v": 0
    },
]`
                                        }
                                    </pre>
                                </div>
                            </div>
                            <div class="col l6 s12">
                                <div className="api-call-div">
                                    <div style={{ float: 'right' }}>
                                        <i style={{ cursor: 'pointer' }} class="material-icons"
                                            onClick={() => copyUrlToClipboard('https://apis-store.herokuapp.com/users/get-users')}
                                        >content_copy</i>
                                    </div>
                                    <div align="center">
                                        <div className="api-code-title">
                                            Get All Users
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <span style={{ color: 'yellow' }}>const allUsers = await axios.get</span>('<span style={{ color: '#7ec699' }}>https://apis-store.herokuapp.com/users/get-users</span>') <br />
                                        <span><span style={{ color: 'rgb(236, 165, 34)' }}>console.log</span>(allUsers) </span>
                                    </div>
                                    <br />
                                    <a class="waves-effect waves-light btn"
                                        href="https://apis-store.herokuapp.com/users/get-users"
                                        target="_BLANK"
                                    >Run</a>
                                </div>
                                <br />
                            </div>

                            <br />
                            <br />
                            <div class="col l6 s12">
                                <div className="api-call-div" style={{ overflowX: 'auto' }}>
                                    <div align="center">
                                        <div className="api-code-title">
                                            Other Requests
                                        </div>
                                    </div>
                                    <br />
                                    <div align="center">
                                        <button class="waves-effect waves-light btn modal-trigger" href="#modal1">
                                            Add User
                                        </button>
                                        &nbsp;&nbsp;&nbsp;
                                        <button class="waves-effect waves-light btn modal-trigger" href="#modal1">
                                            Update User
                                        </button>
                                        &nbsp;&nbsp;&nbsp;
                                        <button class="waves-effect waves-light btn modal-trigger" href="#modal1">
                                            Delete User
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popup Modals */}
                <PopupModals modalId="modal1">
                    <Post />
                </PopupModals>


            </div>
        </>
    );
}

export default Users;