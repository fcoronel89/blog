export const apiUrl: string = (import.meta as any).env
  .VITE_BACKEND_URL as string;

export const frontendUrl: string = (import.meta as any).env
  .VITE_FRONTEND_URL as string;

export const getTextFromHTML = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

type year = "numeric" | "2-digit" | undefined;
type month = "long" | undefined;
type day = "numeric" | "2-digit" | undefined;

type options = {
  year?: year;
  month?: month;
  day?: day;
};
export const getFormatedDateFromString = (date: string) => {
  const parsedDate = new Date(date);
  const options: options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = parsedDate.toLocaleDateString("es-ES", options);

  return formattedDate;
};

export const categories = [
  { id: "bue", description: "Buenos Aires" },
  { id: "cat", description: "Catamarca" },
  { id: "cha", description: "Chaco" },
  { id: "chu", description: "Chubut" },
  { id: "cba", description: "Córdoba" },
  { id: "cor", description: "Corrientes" },
  { id: "er", description: "Entre Ríos" },
  { id: "for", description: "Formosa" },
  { id: "juj", description: "Jujuy" },
  { id: "lp", description: "La Pampa" },
  { id: "lr", description: "La Rioja" },
  { id: "men", description: "Mendoza" },
  { id: "mis", description: "Misiones" },
  { id: "nqn", description: "Neuquén" },
  { id: "rio", description: "Río Negro" },
  { id: "sal", description: "Salta" },
  { id: "sj", description: "San Juan" },
  { id: "sl", description: "San Luis" },
  { id: "sc", description: "Santa Cruz" },
  { id: "sf", description: "Santa Fe" },
  { id: "sgo", description: "Santiago del Estero" },
  { id: "tf", description: "Tierra del Fuego" },
  { id: "tuc", description: "Tucumán" },
];

export const getCategoryById = (id: string) => {
  return categories.find((category) => category.id === id);
}