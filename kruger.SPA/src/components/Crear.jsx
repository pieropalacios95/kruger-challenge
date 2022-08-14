import React from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import {createEmployee} from '../services/users'
import {validateCedula, validateEmail, validateNames} from '../config/ValidationForm'

export default function Crear() {

    const [information, setInformation] = React.useState({
        cedula: '',
        nombres: '',
        apellidos: '',
        email: ''
    })

    function handleChange(e) {
        const {name, value} = e.target

        setInformation({
            ...information,
            [name]: value
        })
    }

    const handleSubmit = () => {
        createEmployee(information).then( res => res)
        window.location.href=('/admin')
    }

    return (<Box style={{display: 'flex', flexDirection:'column', backgroundColor: '#F6F6F6', padding:'4%', borderRadius:'5%', width:'20rem'}}>
        <Typography variant='h5' style={{display:'flex', justifyContent:'center'}}>REGISTRAR EMPLEADO</Typography>
        <TextField
            name='cedula'
            onChange={handleChange}
            error={validateCedula(information.cedula)}
            value={information.cedula}
            label='Cedula'
            style={{marginLeft:'5%',marginRight:'5%'}}
        />
        <TextField
            name='nombres'
            onChange={handleChange}
            error={validateNames(information.nombres)}
            value={information.nombres}
            label='Nombres'
            style={{marginLeft:'5%',marginRight:'5%'}}
        />
        <TextField
            name='apellidos'
            onChange={handleChange}
            error={validateNames(information.apellidos)}
            value={information.apellidos}
            label='Apellidos'
            style={{marginLeft:'5%',marginRight:'5%'}}
        />
        <TextField
            name='email'
            onChange={handleChange}
            error={validateEmail(information.email)}
            value={information.email}
            label='E-Mail'
            style={{marginLeft:'5%',marginRight:'5%'}}
        />
        <Button onClick={handleSubmit} disabled={
            validateCedula(information.cedula) ||
            validateNames(information.nombres) ||
            validateNames(information.apellidos) ||
            validateEmail(information.email)
        }>
            REGISTRAR
        </Button>
    </Box>)
}