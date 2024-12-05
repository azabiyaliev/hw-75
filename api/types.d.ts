export interface IPassword {
    password: string;
    message: string;
}

export type IPasswordWithoutPassword = Omit<IPassword, "password">