declare global {
    interface Window {
        _localStorage?: Storage;
        _sessionStorage?: Storage;
    }
    declare module '*.svg';
    declare module '*.png';
}

export {};
