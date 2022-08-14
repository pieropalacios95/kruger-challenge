import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {Box, Button, MenuItem, TextField, Typography} from '@mui/material'
import {LocalizationProvider, MobileDatePicker} from '@mui/x-date-pickers'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {getById, updateById} from '../services/users'


export default function Editar() {

    const [information, setInformation] = React.useState({
        cedula: '',
        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        fechaNacimiento: new Date(),
        direccion: '',
        telefono: '',
        estado: true,
        rol: ''
    })

    const [vacunas, setVacunas] = React.useState({
        tipo: '',
        fechaVacunacion: new Date(),
        numeroDosis: 0
    })

    const estado = [{value: true, description: 'Vacunado'}, {value: false, description: 'No Vacunado'}]
    const tipoVacuna = [
        {value: 1, description: 'Sputnik'},
        {value: 2, description: 'AstraZeneca'},
        {value: 3, description: 'Pfizer'},
        {value: 4, description: 'Johnson & Johnson'}]
    const {state} = useLocation()
    const {id} = state
    const navigate = useNavigate()

    React.useEffect(() => {
        getById(id).then(res => {
            setInformation(res.data)
            setVacunas(res.data.vacunas)
        })
    }, [id])

    function handleChange(e) {
        const {name, value} = e.target

        setInformation({
            ...information,
            [name]: value
        })
    }

    function handleChangeVaccine(e) {
        const {name, value} = e.target

        setVacunas({
            ...vacunas,
            [name]: value
        })
    }

    function handleDate(newValue) {
        setInformation({...information, 'fechaNacimiento': newValue})
    }

    function handleDateVaccinated(newValue) {
        setVacunas({...vacunas, 'fechaVacunacion': newValue})
    }

    const handleSubmit = () => {
        updateById(id, information, vacunas).then(res => res)
        window.location.href = ('/admin')
    }

    return (<Box style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F6F6F6',
        padding: '4%',
        borderRadius: '5%',
        width: '30rem'
    }}>
        <Typography variant='h5' style={{display: 'flex', justifyContent: 'center'}}>INFORMACION DE EMPLEADO</Typography>

        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

            <Box style={{display: 'flex', flexDirection: 'column'}}>
                <TextField
                    name='cedula'
                    onChange={handleChange}
                    value={information.cedula}
                    label='Cedula'
                    style={{marginLeft: '5%', marginRight: '5%'}}
                />
                <TextField
                    name='nombres'
                    onChange={handleChange}
                    value={information.nombres}
                    label='Nombres'
                    style={{marginLeft: '5%', marginRight: '5%'}}
                />
                <TextField
                    name='apellidos'
                    onChange={handleChange}
                    value={information.apellidos}
                    label='Apellidos'
                    style={{marginLeft: '5%', marginRight: '5%'}}
                />
                <TextField
                    name='email'
                    onChange={handleChange}
                    value={information.email}
                    label='E-Mail'
                    style={{marginLeft: '5%', marginRight: '5%'}}
                />
                <TextField
                    name='password'
                    onChange={handleChange}
                    value={information.password}
                    label='Contraseña'
                    style={{marginLeft: '5%', marginRight: '5%'}}
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        label="Fecha de nacimiento"
                        inputFormat="MM/dd/yyyy"
                        value={information.fechaNacimiento}
                        onChange={handleDate}
                        renderInput={(params) => <TextField {...params} style={{marginLeft: '5%', marginRight: '5%'}}/>}
                    />
                </LocalizationProvider>
            </Box>
            <Box style={{display: 'flex', flexDirection: 'column'}}>
                <TextField
                    name='direccion'
                    onChange={handleChange}
                    value={information.direccion}
                    label='Direccion'
                    style={{marginLeft: '5%', marginRight: '5%'}}
                />

                <TextField
                    name='telefono'
                    onChange={handleChange}
                    value={information.telefono}
                    label='Numero de telefono'
                    style={{marginLeft: '5%', marginRight: '5%'}}
                />

                <TextField
                    name='estado'
                    onChange={handleChange}
                    value={information.estado}
                    label='Estado'
                    style={{marginLeft: '5%', marginRight: '5%'}}
                    select
                >
                    {
                        estado.map((option, index) => (
                            <MenuItem key={index} value={option.value}>
                                {option.description}
                            </MenuItem>)
                        )
                    }
                </TextField>

                {
                    information.estado === true ?
                        <>
                            <TextField
                                name='tipo'
                                onChange={handleChangeVaccine}
                                value={vacunas.tipo}
                                label='Tipo de vacuna'
                                style={{marginLeft: '5%', marginRight: '5%'}}
                                select
                            >
                                {
                                    tipoVacuna.map(option => (
                                        <MenuItem key={option.value} value={option.description}>
                                            {option.description}
                                        </MenuItem>)
                                    )
                                }
                            </TextField>

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <MobileDatePicker
                                    label="Fecha de vacunacion"
                                    inputFormat="MM/dd/yyyy"
                                    value={vacunas.fechaVacunacion}
                                    onChange={handleDateVaccinated}
                                    renderInput={(params) => <TextField {...params}
                                                                        style={{marginLeft: '5%', marginRight: '5%'}}/>}
                                />
                            </LocalizationProvider>

                            <TextField
                                name='numeroDosis'
                                onChange={handleChangeVaccine}
                                value={vacunas.numeroDosis}
                                label='Numero de dosis'
                                style={{marginLeft: '5%', marginRight: '5%'}}
                            />
                        </>
                        :
                        null
                }
            </Box>
        </Box>
        <Button onClick={handleSubmit}>ACTUALIZAR</Button>
    </Box>)
}