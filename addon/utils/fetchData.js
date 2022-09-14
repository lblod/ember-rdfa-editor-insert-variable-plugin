function generateCodeListOptionsQuery(administrativeUnitUuid) {
  const codeListOptionsQuery = `
    PREFIX lblodMobilitiet: <http://data.lblod.info/vocabularies/mobiliteit/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
    SELECT DISTINCT * WHERE { 
      ?uri a lblodMobilitiet:Codelist;
        skos:prefLabel ?label.
      ${
        administrativeUnitUuid
          ? `
        ?uri dct:publisher ?publisher.
        ?publisher mu:uuid """${administrativeUnitUuid}"""
      `
          : ''
      }
    }
  `;
  return codeListOptionsQuery;
}

export default async function fetchCodeLists(endpoint, administrativeUnitUuid) {
  const codelistsOptionsQueryResult = await executeQuery(
    endpoint,
    generateCodeListOptionsQuery(administrativeUnitUuid)
  );
  const bindings = codelistsOptionsQueryResult.results.bindings;
  return bindings.map((binding) => ({
    uri: binding.uri.value,
    label: binding.label.value,
  }));
}

async function executeQuery(endpoint, query) {
  const encodedQuery = encodeURIComponent(query.trim());
  const response = await fetch(endpoint, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/sparql-results+json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: `query=${encodedQuery}`,
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(
      `Request to MOW backend was unsuccessful: [${response.status}] ${response.statusText}`
    );
  }
}
