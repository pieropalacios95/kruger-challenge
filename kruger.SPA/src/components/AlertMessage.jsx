import {Alert, AlertTitle, Snackbar} from "@mui/material";

export default function AlertMessage(param) {
    return (
        <Snackbar open={param.open} autoHideDuration={1000}>
            <Alert severity={param.severity}>
                <AlertTitle>{param.title}</AlertTitle>
                {param.message}
            </Alert>
        </Snackbar>
    )
}