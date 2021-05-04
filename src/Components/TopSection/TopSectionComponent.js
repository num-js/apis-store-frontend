import React from 'react';
import './TopSectionComponent.css';

const TopSectionComponent = () => {
    return (
        <>
            <div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <br />
                        <br />
                        <h1 class="header center">API's-Store</h1>
                        <div class="row center">
                            <h5 class="header col s12 light">Lots of Data with API endpoints</h5>
                        </div>
                        <div class="row center">
                            <a id="download-button" class="btn-large waves-effect waves-light teal lighten-1"
                                href="https://drive.google.com/u/0/uc?id=1gem1T5s6sqWAgRpEq_lgatX205Xudiz2&export=download"
                                download
                                target="_BLANK"
                            >
                                <span class="fa fa-download"></span> Download Postman Collection
                            </a>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                <div class="parallax">
                    <img src="./images/top-sec-bg.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default TopSectionComponent;