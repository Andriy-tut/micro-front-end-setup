import React from 'react';
//@ts-ignore
const Map = React.lazy(() => import('MapApplication/app'));

const MapPage = () => {
    // React.useEffect(() => {
    //     import('../../../mapApplication.js').then(() => console.log('Map loaded!'));
    // }, []);
    
    return (
        <div id="map">
            <React.Suspense fallback="Loading...">
                <Map />
            </React.Suspense>
        </div>
    );
};

export default MapPage;
