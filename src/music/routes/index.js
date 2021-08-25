import React, {lazy, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Skeleton } from 'antd'
import { helper } from '../helper/common'

const HomePage = lazy(() => import('../pages/home/index'))
// const FavPage = lazy(() => import('../pages/fav/index'))
const Login = lazy(() => import('../pages/login/index'))

function IsLoginUserMovies({ children, ...rest }) {
  let auth = helper.fakeAuthLogin();
  return (
    <Route
      {...rest}
      render={({location}) =>
        auth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    >

    </Route>
  )
}

function PrivateRouteMovie({ children, ...rest }) {
  let auth = helper.fakeAuthLogin();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const RoutesApp = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active/>}>
        <Switch>
          <PrivateRouteMovie path="/" exact>
            <HomePage/>
          </PrivateRouteMovie>
          <PrivateRouteMovie path="/home">
            <HomePage/>
          </PrivateRouteMovie>
          {/* <PrivateRouteMovie path="/login">
            <Login/>
          </PrivateRouteMovie> */}
          <IsLoginUserMovies path="/login">
            <Login/>
          </IsLoginUserMovies>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RoutesApp