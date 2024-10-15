# Documentación del Laboratorio de Docker: Mi Aplicación

# OBJETIVO
El objetivo de este laboratorio es construir y desplegar una aplicación simple utilizando Docker. 

# Requisitos Previos:
*Docker version 20.10.7
*WSL (Windows Subsystem for Linux)

# PASOS REALIZADOS
1. Instalación de Docker: Instalé Docker siguiendo las instrucciones de la documentación oficial.
2. Creación de la Aplicación: Creé un directorio llamado mi-aplicacion, dentro del cual se encuentran los archivos Dockerfile, app.js, y package.json.
3. Construcción de la Imagen:
    docker build -t mi-aplicacion 
4. Ejecución de la Aplicación:
    docker run -p 3000:3000 mi-aplicacion
Accedí a la aplicación en http://localhost:3000.
5. Subida a Docker Hub:
    docker tag mi-aplicacion malejarv24/mi-aplicacion:latest
    docker login
    docker push malejarv24/mi-aplicacion:latest
   
## Instrucciones para Ejecutar

1. Clona el repositorio:
git clone https://github.com/MalejaRV24/mi-aplicacion.git

2. Navega al directorio de la aplicación:
cd mi-aplicacion

3. Ejecuta la aplicación usando Docker:
docker run -p 3000:3000 [tu-usuario]/mi-aplicacion

4. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Contribuciones

Sientete libre de hacer un fork y contribuir a este proyecto.

RESULTADOS
La aplicación muestra un "¡Hola, mundo!" en el navegador cuando se accedió en el puerto 3000.

DESAFIOS Y SOLUCIONES
Problema: No se pudo iniciar el contenedor porque el puerto 3000 ya estaba en uso.
Solución: Usé el comando sudo lsof -i :3000 para identificar el proceso en uso y lo detuve.

LECCIONES APRENDIDAS
Aprendí a manejar contenedores de Docker y la importancia de la gestión de puertos.

CONCLUSIONES
El laboratorio fue exitoso y demostró la capacidad de Docker para simplificar el despliegue de aplicaciones.
