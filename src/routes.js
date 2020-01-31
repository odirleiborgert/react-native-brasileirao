import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Dashboard from '~/pages/Dashboard';
import Guesses from '~/pages/Guesses';
import Login from '~/pages/Login';
import Ranking from '~/pages/Ranking';
import Results from '~/pages/Results';

const Routes = createAppContainer(createSwitchNavigator({
    Dashboard: {
        screen: Dashboard,
        path: 'dashboard'
    },
    Guesses: {
        screen: Guesses,
        path: 'guesses'
    },
    Login: {
        screen: Login,
        path: 'login'
    },
    Ranking: {
        screen: Ranking,
        path: 'ranking'
    },
    Results: {
        screen: Results,
        path: 'results'
    }
},
{initialRouteName : 'Dashboard'}));

export default Routes;
