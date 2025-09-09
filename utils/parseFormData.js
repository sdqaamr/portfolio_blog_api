export const parseFormDataArrays = (body, fields = []) => {
  const parsed = { ...body };

  fields.forEach((field) => {
    if (parsed[field]) {
      if (Array.isArray(parsed[field])) {
        return; // already array (JSON sent as raw)
      }
      try {
        parsed[field] = JSON.parse(parsed[field]); // parse stringified JSON
      } catch {
        parsed[field] = [parsed[field]]; // fallback → wrap in array
      }
    } else {
      parsed[field] = []; // default empty array if missing
    }
  });

  return parsed;
};
