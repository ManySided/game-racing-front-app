export interface User {
    login: string;
    email?: string;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}