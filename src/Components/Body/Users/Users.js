import React from 'react';
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
                                            `
"message": "User's Data Fetched",
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
]
                                            `
                                        }
                                    </pre>
                                </div>
                            </div>
                            <div class="col l6 s12">
                                <div className="api-call-div">
                                    <div style={{ float: 'right' }}>
                                        <i class="material-icons">content_copy</i>
                                    </div>
                                    <div align="center">
                                        <div className="api-code-title" >
                                            Get All Users
                                    </div>
                                    </div>

                                    <div>
                                        <span style={{ color: 'yellow' }}>const allUsers = await axios.get</span>('<span style={{ color: '#7ec699' }}>https://apis-store.herokuapp.com/users/get-users</span>') <br />
                                        <span style={{ color: 'rgb(236, 165, 34)' }}> &nbsp; &nbsp; &nbsp; &nbsp; .then</span>(res <span style={{ color: 'cyan' }}>=></span> res.json()) <br />
                                        <span style={{ color: 'rgb(236, 165, 34)' }}> &nbsp; &nbsp; &nbsp; &nbsp; .then</span>(data <span style={{ color: 'cyan' }}>=></span> console.log(data))
                                    </div>
                                    <br />
                                    <a class="waves-effect waves-light btn"
                                        href="https://apis-store.herokuapp.com/users/get-users"
                                        target="_BLANK"
                                    >Run</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;