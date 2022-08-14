import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Box, Button, TableContainer, Table, Typography, TextField, MenuItem} from '@mui/material'
import {getAllEmployees, getEmployeesFilteredEstado, getEmployeesFilteredTipo} from '../services/users'
import TableData from './TableData'
import TableHeader from './TableHeader'

export default function Administrador() {

    const navigate = useNavigate()

    const [aux, setAux] = React.useState({filtro: 0, estado: false, tipoVacuna: ''})
    const [users, setUsers] = React.useState([])

    const filtro = [{value: 1, description: 'Estado'}, {value: 2, description: 'Tipo de vacuna'}]
    const estado = [{value: true, description: 'Vacunado'}, {value: false, description: 'No Vacunado'}]
    const tipoVacuna = [
        {value: 1, description: 'Sputnik'},
        {value: 2, description: 'AstraZeneca'},
        {value: 3, description: 'Pfizer'},
        {value: 4, description: 'Johnson & Johnson'}]

    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    const handleCreate = () => {
        navigate('crear')
    }

    function handleChange(e) {
        const {name, value} = e.target

        setAux({
            ...aux,
            [name]: value
        })
    }

    const handleFilter = async () => {
        if (aux.filtro === 1) {
            getEmployeesFilteredEstado(aux.estado).then(res => setUsers(res.data))
        } else {
            getEmployeesFilteredTipo(aux.tipoVacuna).then(res => setUsers(res.data))
        }
    }

    React.useEffect(() => {
        if (sessionStorage.getItem('ROL') !== 'administrador') {
            navigate('/')
        }

        getAllEmployees()
            .then(res => setUsers(res.data))
    }, [navigate])

    return (
        <>
            <Typography variant='h4'
                        style={{display: 'flex', justifyContent: 'center', margin: '2.5%', color: '#F6F6F6'}}>
                ADMINISTRADOR
            </Typography>
            <TableContainer style={{background: 'white', borderRadius: '5px', marginTop: '2.5%'}}>

                <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

                    <TextField
                        name='filtro'
                        onChange={handleChange}
                        value={aux.filtro}
                        label='Tipo de filtro'
                        style={{width: '25%', marginTop: '2%', marginLeft: '2.5%'}}
                        select
                    >
                        {
                            filtro.map(res => (
                                <MenuItem key={res.value} value={res.value}>{res.description}</MenuItem>
                            ))
                        }
                    </TextField>

                    {aux.filtro !== 0 ? aux.filtro === 1 ?
                            <TextField
                                name='estado'
                                onChange={handleChange}
                                value={aux.estado}
                                label='Estado'
                                style={{width: '25%', marginTop: '2%', marginLeft: '2.5%'}}
                                select
                            >
                                {
                                    estado.map((res, index) => (
                                        <MenuItem key={index} value={res.value}>{res.description}</MenuItem>
                                    ))
                                }
                            </TextField>
                            : <TextField
                                name='tipoVacuna'
                                onChange={handleChange}
                                value={aux.tipoVacuna}
                                label='Tipo de Vacuna'
                                style={{width: '25%', marginTop: '2%', marginLeft: '2.5%'}}
                                select
                            >
                                {
                                    tipoVacuna.map(res => (
                                        <MenuItem key={res.value} value={res.description}>{res.description}</MenuItem>
                                    ))
                                }
                            </TextField>
                        : null
                    }

                    <Button onClick={handleFilter} style={{marginTop: '3%', marginLeft: '2.5%'}}>Filtrar</Button>
                    <Button onClick={() => {
                        getAllEmployees().then(res => setUsers(res.data))
                    }} style={{marginTop: '3%', marginLeft: '2.5%'}}>Listar</Button>
                </Box>

                <Table>
                    <TableHeader/>
                    {
                        users.map(res => (
                            <TableData key={res.id} data={res}/>
                        ))
                    }
                </Table>
            </TableContainer>
            <Box style={{display: 'flex', flexDirection: 'row', marginTop: '2.5%'}}>
                <Button onClick={handleCreate} style={{margin: 'auto'}}>AGREGAR</Button>
                <Button onClick={handleLogout} style={{margin: 'auto'}}>SALIR</Button>
            </Box>
        </>
    )
}