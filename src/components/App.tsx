import React from 'react';

import Header from './Header';
import Icons from './Icons';
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
    React.useEffect(() => {
        import('../mapApplication.js').then(() => console.log('Map loaded!'));
    }, []);
    return (
        <>
            <Icons />
            <div style={appStyles}>
                <Header />
                <main style={mainStyles}>
                    <Sidebar />
                    <div className="container-fluid">
                        Main application content
                        <div id="map">
                            Loading...
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default App;