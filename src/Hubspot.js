import React from 'react';
import MyPage from './MyPage';
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';

const MyApp = () => (
    <HubspotProvider>
        <MyPage />
    </HubspotProvider>
)

export default MyApp;