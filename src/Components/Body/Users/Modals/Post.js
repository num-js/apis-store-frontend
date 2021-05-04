import React from 'react';

const Post = () => {
    return (
        <>
            <div align="center">
                <b><span style={{ color: 'red' }}>will availabe soon,</span> till then use Postman Collection</b>
                <br />
                <br />
                <br />
                <a id="download-button" class="btn-large waves-effect waves-light teal lighten-1"
                    href="https://drive.google.com/u/0/uc?id=1gem1T5s6sqWAgRpEq_lgatX205Xudiz2&export=download"
                    download
                    target="_BLANK"
                >
                    <span class="fa fa-download"></span> Download Postman Collection
                </a>
            </div>
        </>
    );
}

export default Post;
