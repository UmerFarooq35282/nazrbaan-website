export const BASE_URL = import.meta.env.VITE_SECURE_BASE_URL
export const fileBaseURL = import.meta.env.VITE_FILE_BASE_URL;

export const getFileURL = (path) => {
    if(path.startsWith("..")){
        return `${fileBaseURL}/${path.slice(3)}`
    }
    return `${fileBaseURL}/${path}`
};