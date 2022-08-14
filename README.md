# KRUGER CHALLENGE :v:


## CONFIGURACIONES

En este repositorio se almacena los items solicitados para la resolución del challenge propuesto, para poder poner en marcha el codigo es necesario repodrucir
los siguientes pasos en el orden se menciona a continuación.

Para poder levantar cada una de las partes del challenge es necesario tener instalado algunas cosas previas como:

* Node.js
* Visual Studio Code (O cualquier IDE o editor de texto que soporte desarrollo en JS
* GIT

Una vez instalado los softwares previamente mencionados debemos reproducir la siguiente lista de procesos en el orden indicado:

1. Clonar el repositorio
2. Una vez clonado, abrir con el Visual Studio Code o el editor seleccionado la carpeta kruger.API
3. Ya estando dentro se debe ejecutar en la consola de comando, el siguiente script
* npm install
4. Una vez finalizado se debe ejecutar el siguiente script
* npm run server

5. Para la siguien parte es necesario ejecutar abrir una nueva ventana del editor de texto (sin cerrar la anterior)
6. Una vez abierta la nueva ventana procedemos a abrir la carpeta kruger.SPA
7. Ya estando aquí se abre una nueva consola de comandos, en la cual ejecutaremos el siguiente script
* npm install
8. Una vez finalizado de ejecutar el script anterior se debe ejecutar el siguiente:
* npm start


## FUNCIONAMIENTO DE LA APLICACION

* Para poder loggearse es necesario poder revisar el archivo db.json que se encuentra en la ruta kruger.API/db/db.json dentro de esta carpeta
un unico usuario administrador o si se prefiere se adjunta a continuación las credenciales

**username:** *jrodriguez@test.com*

**password:** *jrodriguez12@*

* Con lo correspondiente a la creación de usuarios nuevos se crean con el rol de empleado por defecto, el nombre de usuario es el correo ingresado en el formulario
de creacion y las contraseñas generadas se la puede observar en la tabla de administración
