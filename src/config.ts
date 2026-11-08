// Backend (Spring Boot API) gerektiren özellikler: gönüllü girişi, Haberim Var,
// admin paneli ve API'den gelen haberler. Canlıda backend yayına alınana kadar
// kapalıdır; yerelde açmak için .env dosyasına PUBLIC_BACKEND_ENABLED=true ekleyin.
export const BACKEND_ENABLED = import.meta.env.PUBLIC_BACKEND_ENABLED === "true";

export const API_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:8080";
