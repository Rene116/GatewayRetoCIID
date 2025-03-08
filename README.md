# Gateway API

Este gateway actúa como un punto de entrada unificado para los microservicios de Startups y Empresas Emergentes, manejando las solicitudes y redirigiéndolas a los servicios correspondientes.

## Pasos para ejecutar el gateway localmente

1. Clonar el repositorio.
2. Instalar las dependencias ejecutando:
   ```sh
   npm install
   ```
3. Configurar las variables de entorno y los endpoints de los microservicios en `config.js`.
4. Iniciar el servidor con:
   ```sh
   node index.js
   ```

## Rutas del Gateway

El gateway reenvía solicitudes a los microservicios de Startups y Empresas Emergentes.

### Rutas relacionadas con Startups

- **`GET /api/startups/read`** → Redirige la solicitud al servicio de Startups.
- **`GET /api/startups/read/:id`** → Obtiene una startup por su ID.
- **`POST /api/startup/create`** → Crea una nueva startup.
- **`PUT /api/startups/update/:id`** → Actualiza una startup existente.
- **`DELETE /api/startups/delete/:id`** → Elimina una startup.

### Rutas relacionadas con Empresas Emergentes

- **`POST /api/technologies/create`** → Crea una nueva tecnología emergente.
- **`GET /api/technologies/read`** → Obtiene la lista de tecnologías emergentes.
- **`PUT /api/technologies/update/:id`** → Actualiza la información de una tecnología emergente.
- **`DELETE /api/technologies/delete/:id`** → Elimina una tecnología emergente.

## Notas Adicionales

- El gateway simplifica el acceso a los microservicios, permitiendo una única URL de entrada.
- Maneja la autenticación y autorización si es necesario.
- Puede incluir balanceo de carga y logging centralizado para monitoreo del sistema.

