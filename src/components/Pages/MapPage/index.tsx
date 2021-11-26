import React from 'react';

const MapPage = () => {
    React.useEffect(() => {
        import('../../../mapApplication.js').then(() => console.log('Map loaded!'));
    }, []);
    
    return (
        <div id="map">
            Loading...
        </div>
    );
};

export default MapPage;
