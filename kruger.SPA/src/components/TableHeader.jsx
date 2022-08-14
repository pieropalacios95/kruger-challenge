import {TableCell, TableHead, TableRow} from "@mui/material";

export default function TableHeader() {
    return (
        <TableHead>
            <TableRow>
                <TableCell style={{fontWeight:'bold'}}> Cedula </TableCell>
                <TableCell style={{fontWeight:'bold'}}> Nombres </TableCell>
                <TableCell style={{fontWeight:'bold'}}> Apeliidos </TableCell>
                <TableCell style={{fontWeight:'bold'}}> Fecha Nacimiento </TableCell>
                <TableCell style={{fontWeight:'bold'}}> Telefono </TableCell>
                <TableCell style={{fontWeight:'bold'}}> Estado </TableCell>
                <TableCell style={{fontWeight:'bold'}}> E-Mail </TableCell>
                <TableCell style={{fontWeight:'bold'}}> Contraseña </TableCell>
                <TableCell style={{fontWeight:'bold'}}>Acciones</TableCell>
            </TableRow>
        </TableHead>
    )
}