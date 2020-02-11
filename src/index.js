import React from 'react';

import '~/config/ReactotronConfig';

import { StatusBar } from 'react-native'

import { ApplicationProvider } from '@ui-kitten/components'

import { mapping, light as lightTheme } from '@eva-design/eva'

import Routes from '~/routes';


const App = () => (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Routes />
    </ApplicationProvider>
);

export default App;
