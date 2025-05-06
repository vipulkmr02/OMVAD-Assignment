import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import './index.css'
import { Link, Outlet, RouterProvider } from 'react-router'
import Home from './Home'
import AuthPage from './Auth'
import { Toaster, ToasterProps } from 'react-hot-toast'
import { Dashboard } from './Dashboard'

const toastProps: ToasterProps = {
  position: "top-right",
}

export interface AppContext {
  key: string | null
}


export const context = createContext({} as AppContext);

const router = createBrowserRouter([
  {
    ErrorBoundary: () =>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-600 size-64">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>

        <div className="text-5xl font-bold text-red-600">
          Lost your way
        </div>
        <Link to="/" className="text-blue-500 text-2xl"> Go home </Link>
      </div>,
    element: <>
      <context.Provider value={{ key: null }}>
        <Outlet />
        <Toaster {...toastProps} />
      </context.Provider>
    </>,
    loader: () => { },
    children: [
      {
        element: <Home />,
        path: "/"
      },
      {
        element: <AuthPage active='signup' />,
        path: "/signup"
      },
      {
        element: <AuthPage active='login' />,
        path: "/login"
      },
      {
        element: <Dashboard />,
        path: "/dashboard"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

