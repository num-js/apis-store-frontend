import React from 'react';

const HeaderComponent = () => {
    return (
        <>
            <nav style={{ background: 'rgb(1, 61, 53)', color: 'white' }} class="" role="navigation">
                <div class="nav-wrapper container">
                    <a id="logo-container" href="#" class="brand-logo" style={{ color: 'white' }}>APIs-Store</a>
                    {/* <ul class="right">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                    </ul> */}
                    {/* <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">-</i></a> */}
                </div>
            </nav>
        </>
    );
}

export default HeaderComponent;