import React from 'react';

import Header from './Header';
import Icons from './Icons';
import Routes from './Routes';
import Sidebar from './Sidebar';
import useAction from '../hooks/useAction';
import { setUser } from '../store/session/actions';

const appStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100vh',
    overflowX: 'auto',
    overflowY: 'hidden',
};

const mainStyles = {
    display: 'flex',
    flexGrow: 1
};

const App = () => {
    const setUserAction = useAction(setUser);
    React.useEffect(() => {
        setUserAction({ name: 'John Doe', email: 'john.doe@test.com' });
    }, []);
    return (
        <>
            <Icons />
            <div style={appStyles}>
                <Header />
                <main style={mainStyles}>
                    <Sidebar />
                    <Routes />
                </main>
            </div>
        </>
    );
};

export default App;