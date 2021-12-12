import React, { useEffect, useState } from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavBarElementsCustom'
import { useHistory } from 'react-router-dom'
import { removeSession } from '../Login/LocalStorageService'
import { useEthers } from '@usedapp/core'

const NavbarCustom = () => {
  const history = useHistory()

  const { activateBrowserWallet, account } = useEthers()

  function logout() {
    //alert("Logout Successfully")

    removeSession()

    history.push('/')
  }

  console.log(account)

  return (
    <>
      <Nav className="flex flex-end">
        <Bars
          onClick={() => {
            if (document.getElementById('List-Nav').hidden) {
              document.getElementById('List-Nav').hidden = false
            } else {
              document.getElementById('List-Nav').hidden = true
            }
          }}
        />

        <NavMenu>
          <NavLink to={'/MarketPlace'}>Market Place</NavLink>
          <NavLink to="Dashboard">Dashboard</NavLink>

          <form className="d-flex h-100">
            &emsp;
            <button
              className="btn btn-outline-success h-50 my-auto"
              onClick={logout}
              type="submit"
            >
              Log-out
            </button>
          </form>

          {account ? (
            <button
              className="ml-4 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 disabled"
              onClick={() => activateBrowserWallet()}
              disabled
            >
              Connected
            </button>
          ) : (
            <button
              className="ml-4 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-orange-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              onClick={() => activateBrowserWallet()}
            >
              Connect
            </button>
          )}
        </NavMenu>
      </Nav>

      <nav
        hidden={true}
        className="d-md-none d-lg-none w-100 bg-gray-200"
        id="List-Nav"
      >
        <ul className="navbar-nav d-inline-block  w-100">
          <li className="p-1 bg-gray-200 hover:bg-gray-300">
            <a href="/Dashboard" className="active d-block">
              Dashboard
            </a>
          </li>
          <li className="p-1 bg-gray-200 hover:bg-gray-300">
            <a href="/MarketPlace" className="active d-block">
              MarketPlace
            </a>
          </li>
          <li className="p-1 bg-gray-200 hover:bg-gray-300">
            <button onClick={logout} className="active d-block">
              Log-out
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarCustom
