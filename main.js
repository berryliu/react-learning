/**
 * Created by berry on 17/1/9.
 */

import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import routes from './src/routes'
import appStore from './src/store/reducer'

let store = createStore(appStore)

render(
  <Provider>
    <Router history={hashHistory} routes={routes} store={store}/>
  </Provider>,
  document.getElementById('content')
);