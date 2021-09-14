import React from 'react';

const App = () => {
    React.useEffect(() => {
        import('../mapApplication.js').then(() => console.log('Map loaded!'));
    }, []);
    return (
        <div className="app">
            <header>Header</header>
            <main>
                Main application content
                <div id="map">
                    Loading...
                </div>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
};

export default App;