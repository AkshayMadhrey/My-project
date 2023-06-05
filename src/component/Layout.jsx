import { Outlet, Link } from "react-router-dom";
import React from 'react'

export default function Layout() {
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/">MainTodo</Link>
            </li>
            <li>
              <Link to="/Project">Project</Link>
            </li>
            <li>
              <Link to="/LoginPage">LoginPage</Link>
            </li>
            <li>
              <Link to="/Table">Table</Link>
            </li>
            <li>
              <Link to="/APiCalling">APiCalling</Link>
            </li>
            <li>
              <Link to="/Form">Form</Link>
            </li>
            <li>
              <Link to="/Storage">Storage</Link>
            </li>
            <li>
              <Link to="/NoPage">NoPage</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  )
}
