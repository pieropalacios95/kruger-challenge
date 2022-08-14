import React from 'react'
import {Button, TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import '../styles/Login.css'
import logo from '../assets/vaccination.png'
import {getAllEmployees} from '../services/users'
import AlertMessage from './AlertMessage'

export default function Login() {

    const navigate = useNavigate()

    const [data, setData] = React.useState([])
    const [issues, setIssues] = React.useState({
        title: '',
        severity: '',
        message: '',
        open: false
    })
    const [credentials, setCredentials] = React.useState({
        username: '',
        password: ''
    })

    React.useEffect(() => {
        getAllEmployees()
            .then(res => setData(res.data))
    }, [])

    function handleChange(e) {
        const {name, value} = e.target

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    function handleLogin() {
        if (data.find(res => res.email === credentials.username) && data.find(res => res.password === credentials.password)) {
            if (data.find(res => res.email === credentials.username).rol === 'administrador') {
                sessionStorage.setItem('ROL', 'administrador')
                navigate('/admin')
            } else if (data.find(res => res.email === credentials.username).rol === 'empleado') {
                sessionStorage.setItem('ROL', 'empleado')
                navigate('/employee', {state: {id: data.find(res => res.email === credentials.username).id}})
            }
        } else {
            setIssues({
                title: 'Error',
                severity: 'error',
                message: 'Datos incorrectos',
                open: true
            })
        }
    }

    return (
        <div className='body'>
            <img src={logo} alt='LOGO' width='100px' height='100px'/>
            <TextField
                name='username'
                label='Nombre de usuario'
                value={credentials.username}
                onChange={handleChange}
            />
            <TextField
                name='password'
                label='Contraseña'
                value={credentials.password}
                onChange={handleChange}
                type='password'
            />
            <Button
                onClick={handleLogin}
            >
                Iniciar Sesion
            </Button>
            <AlertMessage
                title={issues.title}
                severity={issues.severity}
                message={issues.message}
                open={issues.open}
            />
        </div>
    )
}