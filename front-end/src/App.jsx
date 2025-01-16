import './App.css'
import About from './pages/About'
import ArticleList from './pages/ArticleListPage'
import ArticlePage, { loader as articleloader} from './pages/ArticlePage'
import HomePage from './pages/HomePage'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import NavBar from './NavBar'
import Layout from './Layout.JSX'
import Nf404 from './pages/Nf404'
import LoginPage from './pages/LoginPage'
import CreateAccountPage from './pages/CreateAccountPage'

const routes = [{
  path: "/",
  element: <Layout />,
  errorElement: <Nf404 />,
  children: [
    { 
      path: "/",
      element: <HomePage />
    },
    { 
      path: "/about",
      element: <About />
    },
    { 
      path: "/articles",
      element: <ArticleList />
    },
    { 
      path: "/articles/:name",
      element: <ArticlePage />,
      loader:articleloader,
    },
    {
      path:"/login",
      element:<LoginPage />
    },
    {
      path:"/create-account",
      element:<CreateAccountPage />
    }
]
}]

const router = createBrowserRouter(routes)
function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <NavBar />
        {router}
      </div>
    </RouterProvider>
  )
}

export default App
