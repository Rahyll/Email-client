export interface ISignup{
    username:string;
    password:string;
    passwordConfirmation:string;
}

export interface ISignupResponse{
    username:string
}

export interface ISignedinResponse{
    authenticated:boolean;
    username:string
}