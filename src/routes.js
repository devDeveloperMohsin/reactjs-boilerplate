import App from './App';
import Hello from './pages/Hello';
import ErrorPage404 from './pages/error/ErrorPage404';

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hello",
    element: <Hello />,
  },
  {
    path: "*",
    element: <ErrorPage404 />
  }
];

export default routes;