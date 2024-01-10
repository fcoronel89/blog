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
