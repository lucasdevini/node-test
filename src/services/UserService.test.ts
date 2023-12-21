import { match } from 'assert';
import { User } from '../models/User';
import * as UserService from '../services/UserService';

describe('Testando os services de user', () => {
    let email = 'teste@email.com';
    let password = '1234';

    beforeAll(async () => {
        await User.sync({force: true});
    });

    it("Deve criar um novo usuário", async() => {
        const newUser = await UserService.createUser(email, password);
        expect(newUser).not.toBeNull;
        expect(newUser).toHaveProperty('id');
    })

    it("Não deve permitir a criação de um usuário com um email existente", async () => {
        const newUser = await UserService.createUser(email, password);
        expect(newUser).toBeNull;
    })

    it("Deve encontrar um usuário a partir do email", async () => {
        const user = await UserService.findByEmail(email);
        expect(user?.email).toBe(email);
    })

    it("deve corresponder a senha inserida com a que está salva no banco de dados", async () => {
        const user = await UserService.findByEmail(email);
        const match = UserService.matchPassword(password, user?.password as string);

        expect(match).toBeTruthy();
    })

    it("não deve corresponder a senha digitada com a que está salva no banco de dados", async () => {
        const user = await UserService.findByEmail(email);
        const match = UserService.matchPassword('invalid', user?.password as string);

        expect(match).toBeTruthy();
    })

    it("Deve exibir a lista de usuários", async () => {
        const users = await UserService.findAll();
        expect(users.length).toBeGreaterThanOrEqual(1);

        for(let i in users) {
            expect(users[i]).toBeInstanceOf(User);
        }
    })
}) 