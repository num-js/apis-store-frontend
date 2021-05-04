import { useEffect } from 'react';
import Body from './Components/Body/Body';
import HeaderComponent from './Components/Header/HeaderComponent';
import TopSectionComponent from './Components/TopSection/TopSectionComponent';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './styles/materialize.css';
import './styles/style.css';
import './styles/custom.css';
import Users from './Components/Body/Users/Users';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';

const App = () => {

    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
    });

    return (
        <>
            <HeaderComponent />
            <TopSectionComponent />
            <Users />

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer />
        </>
    );
}
export default App;