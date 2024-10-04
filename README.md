# Ejercicio Practico: Sistema de Gestion de Veterinaria

## Descripcion
El proposito de este ejercicio es desarrollar un sistema para gestionar clientes y sus mascotas dentro de una veterinaria. A traves de este ejercicio, se evaluara la capacidad para construir un flujo de datos utilizando **estructuras de datos** y **relaciones entre entidades**. El sistema debe implementar las siguientes funcionalidades:

---

## Requisitos del sistema 
### 1. **Registro de Clientes**
    - Crear un cliente solicitando la siguiente informacion:
        -Nombre Completo
        -Direccion
        -Telefono de contacto
    -Validar que el cliente no este duplicado antes de registrarlo.
### 2. **Agregar Mascota al Cliente**
    - Permitir agregar una mascota a un cliente existente en el sistema.
    - Solicitar la siguiente informacion para cada mascota:
     - Nombre de la mascota
     - Tipo de Animal (Perro, Gato, etc.)
     - Edad
    - Relacionar la mascota con su respectivo duenio.
    - Si el cliente no esta registrado, mostrar un mensaje de error indicando que debe registrarse primero.
### 3. **Historial de Visitas**
    - Permitir agregar visitas a las mascotas registradas. Cada visita debe contener:
     - Fecha de visita
     - Motivo de consulta
     - Tratamiento aplicado
    - Asociar las visitas a la mascota correspondiente.
    - El historial debe ser consultable para cada mascota y su respectivo duenio.
### 4. **Listar Clientes y sus Mascotas**
    - Mostrar todos los clientes con sus respectivas mascotas.
    - Para cada cliente, visualizar sus datos y las mascotas asociadas con el siguiente formato:
    ```
    Cliente: Juan Perez
    Telefono: 123-123
    Mascotas: 
        - Nombre: Rex, Tipo: Perro, Edad: 5 anios
    ```
### 5. **Menu Principal**
    - El sistema debe presentar un menu interactivo con las siguientes opciones:
     1. Registrar nuevo cliente
     2. Agregar mascota a cliente
     3. Registrar visita de mascotas
     4. Listar clientes y mascotas
     5. Salir del programa

### El objetivo de este ejercicio es evaluar la capacidad para organizar estructuras de datos y relaciones entre entidades, simulando un escenario real dentro de una veterinaria. Se medira la agilidad, precision y habilidades programaticas de cada miembro de la comunidad.