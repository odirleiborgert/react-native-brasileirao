import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Dashboard from '~/pages/Dashboard';
import Guesses from '~/pages/Guesses';
import Others from '~/pages/Others';
import Login from '~/pages/Login';
import Ranking from '~/pages/Ranking';
import Results from '~/pages/Results';

const Routes = createAppContainer(createSwitchNavigator({
    Login: {
        screen: Login,
        path: 'login'
    },
    Dashboard: {
        screen: Dashboard,
        path: 'dashboard'
    },
    Guesses: {
        screen: Guesses,
        path: 'guesses/:id'
    },
    Others: {
        screen: Others,
        path: 'others/:id'
    },
    Ranking: {
        screen: Ranking,
        path: 'ranking/:id'
    },
    Results: {
        screen: Results,
        path: 'results/:id'
    }
},
{initialRouteName : 'Login'}));

export default Routes;
