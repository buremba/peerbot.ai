import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Fragment } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <Fragment>
      <div className="min-h-screen bg-[#111111]">
        <Outlet />
      </div>
    </Fragment>
  )
}