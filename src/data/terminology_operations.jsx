const operations = [
    {
        Operacion: "Listar CodeSystems",
        Metodo: "GET",
        Ruta: "[base]/CodeSystem",
        Descripcion: "Obtiene todos los sistemas de códigos disponibles en el servidor."
    },
    {
        Operacion: "Obtener CodeSystem por ID",
        Metodo: "GET",
        Ruta: "[base]/CodeSystem/{id}",
        Descripcion: "Obtiene un sistema de códigos específico por su identificador."
    },
    {
        Operacion: "Crear CodeSystem",
        Metodo: "POST",
        Ruta: "[base]/CodeSystem",
        Descripcion: "Crea un nuevo sistema de códigos en el servidor."
    },
    {
        Operacion: "$expand",
        Metodo: "GET",
        Ruta: "[base]/ValueSet/$expand?url={ValueSet-url}",
        Descripcion: "Expande un ValueSet mostrando todos sus códigos contenidos."
    },
    {
        Operacion: "Validar código en ValueSet",
        Metodo: "GET",
        Ruta: "[base]/ValueSet/$validate-code?url={ValueSet-url}&code={code}&system={system}",
        Descripcion: "Verifica si un código existe dentro de un ValueSet."
    },
    {
        Operacion: "Listar ConceptMaps",
        Metodo: "GET",
        Ruta: "[base]/ConceptMap",
        Descripcion: "Obtiene todos los mapas de conceptos disponibles."
    },
    {
        Operacion: "$translate",
        Metodo: "GET",
        Ruta: "[base]/ConceptMap/$translate?code={code}&system={system}&url={ConceptMap-url}",
        Descripcion: "Traduce un código usando un ConceptMap."
    },
    {
        Operacion: "Listar StructureDefinitions",
        Metodo: "GET",
        Ruta: "[base]/StructureDefinition",
        Descripcion: "Obtiene todos los perfiles y extensiones disponibles."
    },
    {
        Operacion: "Obtener StructureDefinition por ID",
        Metodo: "GET",
        Ruta: "[base]/StructureDefinition/{id}",
        Descripcion: "Obtiene un perfil FHIR específico por su identificador."
    },
    {
        Operacion: "Listar Medication",
        Metodo: "GET",
        Ruta: "[base]/Medication",
        Descripcion: "Obtiene todos los recursos de medicamentos disponibles."
    },
    {
        Operacion: "Crear Medication",
        Metodo: "POST",
        Ruta: "[base]/Medication",
        Descripcion: "Crea un nuevo recurso de medicamento."
    }
];
export default operations;