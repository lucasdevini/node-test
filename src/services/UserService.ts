import { User } from "../models/User";
import bcrypt from "bcrypt";

// Cria um novo usuário
export const createUser = async (email: string, password: string) => {
    const hasUser = await User.findOne({where: { email }});

    if(!hasUser) { // cria o usuário caso não exista um com o email digitado
        const hash = bcrypt.hashSync(password, 10);

        const newUser = await User.create({     
            email, 
            password: hash 
        })

        return newUser;
    } else {
        return null;
    }
}

// Encontra um usuário a partir do email
export const findByEmail = async (email: string) => {
    return await User.findOne({ where: { email }});
}

// Verifica se a senha inserida no sistema "bate" com a senha cadastrada no banco de dados
export const matchPassword = (password: string, encrypted: string) => {
    return bcrypt.compare(password, encrypted);
}

// Retorna a lista de todos os usuários cadastrados
export const findAll = async () => {
    return await User.findAll();
}