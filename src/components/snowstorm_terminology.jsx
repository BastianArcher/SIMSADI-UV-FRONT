import React, { useState } from "react";
import operations from "../data/terminology_operations";

const snowstorm_terminology = () => {
  const [selectedOp, setSelectedOp] = useState(operations[0]);
  const [resourceType, setResourceType] = useState("Patient");
  const [resourceId, setResourceId] = useState("");
  const [jsonInput, setJsonInput] = useState("");
  const [params, setParams] = useState("");
  const [response, setResponse] = useState("");

  const SERVER_BASE = "/fhir";

  const needsResourceType = selectedOp.Ruta.includes("[resourceType]");
  const needsId = selectedOp.Ruta.includes("[id]");
  const needsParams = selectedOp.Ruta.includes("param=value") || selectedOp.Ruta.includes("{") || selectedOp.Ruta.includes("=");
  const needsBody = selectedOp.Metodo === "POST" || selectedOp.Metodo === "PUT";

  const buildUrl = () => {
    let url = selectedOp.Ruta.replace("[base]", SERVER_BASE)
      .replace("[resourceType]", resourceType)
      .replace("[id]", resourceId);

    // Reemplaza parámetros simples como {code}, {system}, etc.
    if (needsParams && params) {
      const paramPairs = params.split("&");
      paramPairs.forEach(pair => {
        const [key, value] = pair.split("=");
        url = url.replace(`{${key}}`, value);
      });
    }

    return url;
  };

  const handleSend = async () => {
    const url = buildUrl();

    let options = {
      method: selectedOp.Metodo,
      headers: {
        "Content-Type": "application/fhir+json",
        Accept: "application/fhir+json",
      },
      mode: "cors",
    };

    if (needsBody) {
      try {
        options.body = JSON.stringify(JSON.parse(jsonInput));
      } catch {
        setResponse("JSON inválido");
        return;
      }
    }

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setResponse(`Error: ${err.message}`);
    }
  };

  return (
    <div className="max-w-3xl my-10 mx-auto p-6 bg-white border-2 border-primary-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Terminology Tool</h2>

      <label className="block text-gray-700 font-medium mb-2">
        Operación:
        <select
          value={selectedOp.Operacion}
          onChange={(e) =>
            setSelectedOp(
              operations.find((op) => op.Operacion === e.target.value)
            )
          }
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-400 focus:border-primary-400"
        >
          {operations.map((op) => (
            <option key={op.Operacion} value={op.Operacion}>
              {op.Operacion}
            </option>
          ))}
        </select>
      </label>

      <p className="italic text-gray-600 mb-6">{selectedOp.Descripcion}</p>

      {needsResourceType && (
        <div className="space-y-4 mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Tipo de recurso:
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-400 focus:border-primary-400"
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value)}
            />
          </label>
        </div>
      )}

      {needsId && (
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            ID del recurso:
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-400 focus:border-primary-400"
              value={resourceId}
              onChange={(e) => setResourceId(e.target.value)}
            />
          </label>
        </div>
      )}

      {needsParams && (
        <div>
          <label>
            Parámetros: 
            <input
              value={params}
              onChange={(e) => setParams(e.target.value)}
              placeholder="code=12345&system=http://snomed.info/sct"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-400 focus:border-primary-400"
            />
          </label>
        </div>
      )}

      {needsBody && (
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            JSON del recurso:
          </label>
          <textarea
            rows="10"
            cols="60"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-400 focus:border-primary-400"
          />
        </div>
      )}

      <div className="italic text-gray-500 mt-2 mb-6 p-3 bg-gray-50 rounded-md border border-gray-200">
        Comando a ejecutar: {selectedOp.Metodo} {buildUrl()}
      </div>

      <button
        className="w-full sm:w-auto px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 transition-colors"
        onClick={handleSend}
      >
        Enviar
      </button>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Respuesta del servidor:
        </h3>
        <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto min-h-[100px] font-mono text-sm">
          {response || "Esperando respuesta..."}
        </pre>
      </div>
    </div>
  );
};

export default snowstorm_terminology;
