import {IconButton, TableBody, TableRow, TableCell} from '@mui/material'
import {Edit, Delete} from '@mui/icons-material'
import {deleteById} from '../services/users'
import {useNavigate} from 'react-router-dom'

export default function TableData(params) {

    const navigate = useNavigate()

    const handleDelete = () => {
        deleteById(params.data.id).then(res => res)
        window.location.reload()
    }

    const handleEdit = () => {
        navigate('editar', {state: {id: params.data.id}})
    }

    return (
                <TableBody>
                    <TableRow>
                        <TableCell>{params.data.cedula}</TableCell>
                        <TableCell>{params.data.nombres}</TableCell>
                        <TableCell>{params.data.apellidos}</TableCell>
                        <TableCell>{params.data.fechaNacimiento}</TableCell>
                        <TableCell>{params.data.telefono}</TableCell>
                        <TableCell>
                            {params.data.estado === true ? 'Vacunado' : 'No Vacunado'}
                        </TableCell>
                        <TableCell>{params.data.email}</TableCell>
                        <TableCell>{params.data.password}</TableCell>
                        <TableCell>
                            <IconButton onClick={handleEdit}>
                                <Edit/>
                            </IconButton>
                            <IconButton onClick={handleDelete}>
                                <Delete/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
    )
}