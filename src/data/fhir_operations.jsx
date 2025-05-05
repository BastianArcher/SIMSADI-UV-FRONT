const operations = [
    {
      Operacion: "Leer recurso",
      Metodo: "GET",
      Ruta: "[base]/[resourceType]/[id]",
      Descripcion: "Obtiene un recurso individual por su ID."
    },
    {
      Operacion: "Crear recurso",
      Metodo: "POST",
      Ruta: "[base]/[resourceType]",
      Descripcion: "Crea un nuevo recurso del tipo especificado."
    },
    {
      Operacion: "Actualizar recurso",
      Metodo: "PUT",
      Ruta: "[base]/[resourceType]/[id]",
      Descripcion: "Reemplaza un recurso existente o lo crea si no existe."
    },
    {
      Operacion: "Eliminar recurso",
      Metodo: "DELETE",
      Ruta: "[base]/[resourceType]/[id]",
      Descripcion: "Elimina un recurso identificado por su ID."
    },
    {
      Operacion: "Buscar recursos",
      Metodo: "GET",
      Ruta: "[base]/[resourceType]?param=value",
      Descripcion: "Busca recursos según parámetros definidos."
    },
    {
      Operacion: "Leer metadatos del servidor",
      Metodo: "GET",
      Ruta: "[base]/metadata",
      Descripcion: "Obtiene el CapabilityStatement del servidor FHIR."
    },
    {
      Operacion: "$validate",
      Metodo: "POST",
      Ruta: "[base]/[resourceType]/$validate",
      Descripcion: "Valida si un recurso cumple con su definición y restricciones."
    },
    {
      Operacion: "$everything",
      Metodo: "GET",
      Ruta: "[base]/Patient/[id]/$everything",
      Descripcion: "Recupera todos los recursos relacionados con un paciente o todo el sistema."
    },
    {
      Operacion: "$match",
      Metodo: "POST",
      Ruta: "[base]/Patient/$match",
      Descripcion: "Busca pacientes similares en el sistema según sus datos."
    },
    {
      Operacion: "$graph",
      Metodo: "GET",
      Ruta: "[base]/[resourceType]/[id]/$graph",
      Descripcion: "Devuelve un conjunto de recursos relacionados según una definición de grafo."
    }
  ];
  export default operations;