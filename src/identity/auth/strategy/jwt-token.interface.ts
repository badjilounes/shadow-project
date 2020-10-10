export interface JwtToken {
    id: number;
    email: string;
    exp: number;
    iat: number;
}