import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Details from "../components/Projects/Details";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`https://resume-of-abdullah-al-masud-server.vercel.app/projects/${params.id}`)
            },
            {
                path: '/technologies',
                element: <Technologies></Technologies>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
])

export default router;