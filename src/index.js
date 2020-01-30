import React from 'react';

import '~/config/ReactotronConfig';

import { StatusBar } from 'react-native';

import Routes from '~/routes';

const App = () => (
    <>
        <StatusBar hidden={true} />
        <Routes />
    </>
);

export default App;
