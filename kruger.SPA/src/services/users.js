import axios from 'axios'

const baseUrl = "http://localhost:3000/employess"

export const getAllEmployees = async () => {
    try {
        return await axios.get(`${baseUrl}`)
    } catch (error) {
        return error
    }
}

export const getEmployeesFilteredEstado = async (param) => {
    try {
        return await axios.get(`${baseUrl}?estado=${param}`,
            {
                params:
                    {estado: param.toString()}
            })
    } catch (error) {
        return error
    }
}

export const getEmployeesFilteredTipo = async (param) => {
    try {
        return await axios.get(`${baseUrl}`, {params: {'vacunas.tipo': param}})
    } catch (error) {
        return error
    }
}

export const getById = async (id) => {
    try {
        return await axios.get(`${baseUrl}/${id}`)
    } catch (e) {
        return e
    }
}

export const createEmployee = async (param) => {
    const pass = param.nombres.toLowerCase().slice(0, 1)
        + param.apellidos.toLowerCase().split(' ', 1)
        + Math.floor(Math.random() * 100).toString()
        + '@'
    try {
        return await axios.post(`${baseUrl}`, {
            cedula: param.cedula,
            nombres: param.nombres,
            apellidos: param.apellidos,
            email: param.email,
            password: pass,
            rol: 'empleado',
            estado: false,
            vacunas: {
                tipo: '',
                fechaVacunacion: '',
                numeroDosis: 0
            }
        }).then(res => res.status === 200 || res.status === 201 ? 'Empleado creado con exito' : '')
    } catch (e) {
        return e
    }
}

export const deleteById = async (param) => {
    return await axios.delete(`${baseUrl}/${param}`)
        .then(res => res.status === 200 || res.status === 201 ? 'Registro eliminado correctamente' : '')
}

export const updateById = async (id, data, vacunas) => {
    return await axios.put(`${baseUrl}/${id}`, {
        cedula: data.cedula,
        nombres: data.nombres,
        apellidos: data.apellidos,
        email: data.email,
        password: data.password,
        fechaNacimiento: data.fechaNacimiento.toLocaleString().split(',', 1),
        direccion: data.direccion,
        telefono: data.telefono,
        rol: data.rol,
        estado: data.estado,
        vacunas: {
            tipo: vacunas.tipo,
            fechaVacunacion: vacunas.fechaVacunacion.toLocaleString().split(',', 1),
            numeroDosis: vacunas.numeroDosis
        }
    })
        .then(res => res.status === 200 || res.status === 201 ? 'Datos actualizado correctamente' : '')
}