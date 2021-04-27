import {useEffect} from 'react';
import Body from './Components/Body/Body';
import HeaderComponent from './Components/Header/HeaderComponent';
import TopSectionComponent from './Components/TopSection/TopSectionComponent';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './styles/materialize.css';
import './styles/style.css';
import './styles/custom.css';
import Users from './Components/Body/Users/Users';

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
        </>
    );
}

export default App;