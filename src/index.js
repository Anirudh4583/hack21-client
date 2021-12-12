import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Mainnet, DAppProvider } from '@usedapp/core'

const config = {
  readOnlyChainId: Mainnet.chainID,
  readOnlyUrls: {
    [Mainnet.chainID]:
      'https://rpc-mumbai.maticvigil.com/v1/2555bf83036f32d286cddc96f1d4425e3fe1aecf',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
