import Root from './Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Users from '../pages/Users/Users';
import SingleUser from '../pages/SingleUser/SingleUser';
import { createBrowserRouter } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import WithAuth from './WithAuth';
import AuthRoutes from './AuthRoutes';

const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/users/:id",
                element: <SingleUser />,
            },
            ...AuthRoutes,
            {
                path: "/profile",
                element: <WithAuth><Profile /></WithAuth>,
            },
        ],
    },
]);

export default browserRouter
