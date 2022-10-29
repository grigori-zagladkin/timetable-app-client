export interface IAuthState {
    user: User | null;
    accessToken: string | null;
}

export interface User {
    id: number;
    name: string;
    surname: string;
    faculty: string;
    facultyId: number;
    group: string;
    course: number;
    role: string;
}

export interface RegistrationForm {
    login: string;
    password: string;
    faculty: string;
    course: string;
    group: string;
}

export interface LoginRequest {
    login: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    accessToken: string;
}
