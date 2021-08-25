import React from 'react'
import RoutesApp from './routes/index'
import './font-awesome/css/fontawesome-all.min.css'
import './assets/grid.css'
import './assets/base.css'
import './assets/style.css'
import './assets/resposive.css'
import { Provider } from 'react-redux'
import configStore from './store/index'

const { store } = configStore()

const App = () => {
  return (
    <Provider store={store}>
      <RoutesApp/>
    </Provider>
  )
}

export default React.memo(App)