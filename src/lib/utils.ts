import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// function to help us merge multiple classnames for components wihtout overriding any
export function cn(...inputs: ClassValue[]) {
    // example of how twMerge works -- px-2 py-2 => p-2
    return twMerge(clsx(inputs))
}