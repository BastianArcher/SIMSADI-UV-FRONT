import React, { useState } from 'react';
import operations from '../data/fhir_operations';

const hapi_fhir = () => {
  const [selectedOp, setSelectedOp] = useState(operations[0]);
  const [resourceType, setResourceType] = useState('Patient');
  const [resourceId, setResourceId] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [params, setParams] = useState('');
  const [response, setResponse] = useState('');
  const [serverUrl, setServerUrl] = useState('http://167.71.174.241:8080/fhir');

  const needsResourceType = selectedOp.Ruta.includes('[resourceType]');
  const needsId = selectedOp.Ruta.includes('[id]');
  const needsParams = selectedOp.Ruta.includes('param=value');
  const needsBody = selectedOp.Metodo === 'POST' || selectedOp.Metodo === 'PUT';

  const buildUrl = () => {
    let url = selectedOp.Ruta
      .replace('[base]', serverUrl)
      .replace('[resourceType]', resourceType)
      .replace('[id]', resourceId);

    if (needsParams && params) {
      url = url.replace('param=value', params);
    }

    return url;
  };

  const handleSend = async () => {
    const url = buildUrl();

    let options = {
      method: selectedOp.Metodo,
      headers: {
        'Content-Type': 'application/fhir+json',
        Accept: 'application/fhir+json',
      },
    };

    if (needsBody) {
      try {
        options.body = JSON.stringify(JSON.parse(jsonInput));
      } catch {
        setResponse('JSON inválido');
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
    <div>
      <h2>FHIR Client</h2>

      <label>
        Operación:
        <select
          value={selectedOp.Operacion}
          onChange={e =>
            setSelectedOp(operations.find(op => op.Operacion === e.target.value))
          }
        >
          {operations.map(op => (
            <option key={op.Operacion} value={op.Operacion}>
              {op.Operacion}
            </option>
          ))}
        </select>
      </label>

      <p style={{ fontStyle: 'italic', color: '#555' }}>{selectedOp.Descripcion}</p>

      {needsResourceType && (
        <div>
          <label>Tipo de recurso:
            <input value={resourceType} onChange={e => setResourceType(e.target.value)} />
          </label>
        </div>
      )}

      {needsId && (
        <div>
          <label>ID del recurso:
            <input value={resourceId} onChange={e => setResourceId(e.target.value)} />
          </label>
        </div>
      )}

      {needsParams && (
        <div>
          <label>Parámetros de búsqueda:
            <input value={params} onChange={e => setParams(e.target.value)} placeholder="name=Juan&gender=male" />
          </label>
        </div>
      )}

      {needsBody && (
        <div>
          <label>JSON del recurso:</label><br />
          <textarea
            rows="10"
            cols="60"
            value={jsonInput}
            onChange={e => setJsonInput(e.target.value)}
          />
        </div>
      )}

      <div style={{ fontStyle: 'italic', color: 'gray', marginTop: '1em' }}>
        Comando a ejecutar: {selectedOp.Metodo} {buildUrl()}
      </div>

      <br />
      <button onClick={handleSend}>Enviar</button>

      <h3>Respuesta del servidor:</h3>
      <pre>{response}</pre>
    </div>
  );
};

export default hapi_fhir;
