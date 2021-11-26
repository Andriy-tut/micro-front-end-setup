import React from 'react';

import Header from './Header';
import Icons from './Icons';
import Routes from './Routes';
import Sidebar from './Sidebar';

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