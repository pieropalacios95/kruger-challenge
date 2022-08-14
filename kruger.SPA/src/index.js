import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from '@mui/system'
import {theme} from './config/Global'

import './index.css'
import Login from '../src/components/Login'
import Administrador from './components/Administrador'
import Empleado from './components/Empleado'
import Crear from './components/Crear'
import Editar from './components/Editar'
import EditarEmpleado from './components/EditarEmpleado'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='admin'>
                        <Route index element={<Administrador/>}/>
                        <Route path='crear' element={<Crear/>}/>
                        <Route path='editar' element={<Editar/>}/>
                    </Route>
                    <Route path='employee'>
                        <Route index element={<Empleado/>} />
                        <Route path='editar' element={<EditarEmpleado/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
)