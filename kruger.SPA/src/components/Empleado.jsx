import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {Box, Button, Card, InputLabel, Typography} from '@mui/material'
import {getById} from '../services/users'

export default function Empleado() {

    const {state} = useLocation()
    const {id} = state
    const navigate = useNavigate()

    const [data, setData] = React.useState([])

    React.useEffect(() => {

        if (sessionStorage.getItem('ROL') !== 'empleado') {
            navigate('/')
        }

        getById(id).then(res => setData(res.data))
    }, [id, navigate])

    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    const handleEdit = () => {
        navigate('editar', {state: {id: id}})
    }

    return (
        <Box style={{width: '32.5rem'}}>
            <Typography variant='h4'
                        style={{display: 'flex', justifyContent: 'center', margin: '2.5%', color:'#F6F6F6'}}>EMPLEADO</Typography>
            <Card style={{width: '100%'}}>

                <Box style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                    <Box style={{display: 'flex', flexDirection: 'column', marginRight:'10%'}}>
                        <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>CEDULA</InputLabel>
                        <Typography style={{margin: '2.5%'}}> {data.cedula} </Typography>
                        <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>NOMBRES</InputLabel>
                        <Typography style={{margin: '2.5%'}}> {data.nombres} </Typography>
                        <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>APELLIDOS</InputLabel>
                        <Typography style={{margin: '2.5%'}}> {data.apellidos} </Typography>
                        <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>EMAIL</InputLabel>
                        <Typography style={{margin: '2.5%'}}> {data.email} </Typography>
                        <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%', width:'100%'}}>FECHA DE NACIMIENTO</InputLabel>
                        <Typography style={{margin: '2.5%'}}> {data.fechaNacimiento} </Typography>
                        <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>DIRECCION</InputLabel>
                        <Typography style={{margin: '2.5%'}}> {data.direccion} </Typography>
                        <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>TELEFONO</InputLabel>
                        <Typography style={{margin: '2.5%'}}> {data.telefono} </Typography>
                    </Box>
                    <Box style={{display: 'flex', flexDirection: 'column'}}>
                        <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>ESTADO</InputLabel>
                        <Typography
                            style={{margin: '2.5%'}}> {data.estado === true ? 'Vacunado' : 'No Vacunado'} </Typography>
                        {data.estado === true ?
                            <>
                                <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>TIPO DE VACUNA</InputLabel>
                                <Typography style={{margin: '2.5%'}}> {data.vacunas.tipo} </Typography>
                                <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>FECHA DE VACUNACION</InputLabel>
                                <Typography style={{margin: '2.5%'}}> {data.vacunas.fechaVacunacion} </Typography>
                                <InputLabel style={{fontWeight: 'bold', marginLeft: '2.5%'}}>NUMERO DE DOSIS</InputLabel>
                                <Typography style={{margin: '2.5%'}}> {data.vacunas.numeroDosis} </Typography>
                            </>
                            : null
                        }
                    </Box>
                </Box>
            </Card>
            <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Button onClick={handleEdit} style={{margin: '2.5%'}}>ACTUALIZAR</Button>
                <Button onClick={handleLogout} style={{margin: '2.5%'}}>SALIR</Button>
            </Box>
        </Box>
    )
}