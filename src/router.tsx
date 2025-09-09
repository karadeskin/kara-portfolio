import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
    Link,
  } from '@tanstack/react-router'
  import { useEffect } from 'react'
  
  import Home from './pages/Home'
  import Projects from './pages/Projects'
  import Project from './pages/Project'
  import About from './pages/About'
  import Contact from './pages/Contact'
  
  function Title({ t }: { t: string }) {
    useEffect(() => { document.title = t }, [t])
    return null
  }
  
  //nav with active styling
  function NavLink(props: React.ComponentProps<typeof Link>) {
    return (
      <Link
        {...props}
        activeOptions={{ exact: true }}
        activeProps={{ className: (props.className ? props.className + ' ' : '') + 'active' }}
      />
    )
  }
  
  //this is the layout component that wraps all pages
  //outlet is where the child routes will be rendered
  function RootLayout() {
    return (
      <div className="container">
        <header className="site-header">
          <strong className="brand">Kara Deskin</strong>
          <nav className="nav">
            <NavLink to="/" className="navlink">Home</NavLink>
            <NavLink to="/projects" className="navlink">Projects</NavLink>
            <NavLink to="/about" className="navlink">About</NavLink>
            <NavLink to="/contact" className="navlink">Contact</NavLink>
            <a className="navlink" href="https://github.com/karadeskin" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="navlink" href="https://linkedin.com/in/karadeskin" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a 
              className="navlink"
              href="/Kara_Deskin_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </nav>
        </header>
        <Outlet />
        <footer className="site-footer">© {new Date().getFullYear()} Kara Deskin</footer>
      </div>
    )
  }
  
  //routes
  const rootRoute = createRootRoute({ component: RootLayout })
  
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => (<><Title t="Kara Deskin — Home" /><Home /></>),
  })
  
  const projectsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: () => (<><Title t="Projects — Kara Deskin" /><Projects /></>),
  })
  
  const projectRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects/$slug',
    component: () => (<><Title t="Project — Kara Deskin" /><Project /></>),
  })
  
  const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: () => (<><Title t="About — Kara Deskin" /><About /></>),
  })
  
  const contactRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/contact',
    component: () => (<><Title t="Contact — Kara Deskin" /><Contact /></>),
  })
  
  const notFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/*',
    component: () => (
      <main style={{ padding: 16 }}>
        <Title t="Not Found — Kara Deskin" />
        <h2>Page not found</h2>
        <p><Link to="/">Go Home</Link></p>
      </main>
    ),
  })
  
  rootRoute.addChildren([indexRoute, projectsRoute, projectRoute, aboutRoute, contactRoute, notFoundRoute])
  
  export const router = createRouter({ routeTree: rootRoute })
  
  declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }