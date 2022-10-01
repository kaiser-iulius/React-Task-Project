import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import TaskList from './componentes/TaskList'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskList />
  </React.StrictMode>
)
