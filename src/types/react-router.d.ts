declare module '@tanstack/react-router' {
  import * as React from 'react'
  export const createRootRoute: any
  export const createRoute: any
  export const createRouter: any
  export const Outlet: React.ComponentType<any>
  export const Link: React.ComponentType<any>
  export const RouterProvider: React.ComponentType<any>
  export function useParams(...args: any[]): any
  export type Register = any
}
