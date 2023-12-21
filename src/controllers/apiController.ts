import { Request, Response } from 'express';
import { createUser, findByEmail, findAll, matchPassword } from '../services/UserService';

export const register = async (req: Request, res: Response) => {
    // Tenta criar um novo usuário caso um email e uma senha sejam enviados  
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        let newUser = await createUser(email, password);

        if(newUser) {
            res.status(201).json({ id: newUser.id });;
        } else {
            res.json({ error: 'Email já cadastrado!'});
        }       
    } else {
        res.json({ error: 'E-mail e/ou senha não enviados.' });
    }
}

export const login = async (req: Request, res: Response) => {
    // Tenta logar o usuário caso um email e uma senha sejam enviados (e estejam corretos) 
    if(req.body.email && req.body.password) {
        const email: string = req.body.email;
        const password: string = req.body.password;

        const user = await findByEmail(email); 

        if(user && await matchPassword(password, user?.password)) {
            res.json({ status: true });
            return;
        } else {
            res.json({error: 'Usuário não cadastrado!'})
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await findAll();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}