import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertCurrency(amount: number | string, country = "id-ID") {
  return new Intl.NumberFormat(country, {
    style: "currency",
    currency: "IDR",
  }).format(typeof amount === "string" ? parseInt(amount) : amount);
}
