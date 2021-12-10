import React from 'react';

import './styles.css';
// TODO: add correct type declaration for Map application components
//@ts-ignore
const Map = React.lazy(() => import('MapApplication/app'));

const MapPage = () => {
    return (
        <div id="map">
            <React.Suspense fallback="Loading...">
                <Map />
            </React.Suspense>
        </div>
    );
};

export default MapPage;
