export const apiUrl: string = (import.meta as any).env
  .VITE_BACKEND_URL as string;

export const frontendUrl: string = (import.meta as any).env
  .VITE_FRONTEND_URL as string;

export const getTextFromHTML = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};
