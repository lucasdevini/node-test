import { Sequelize } from 'sequelize'; 
import dotenv from 'dotenv';
import db from './database';

dotenv.config();

// Criando as instância do sequelize com as informações do banco de dados (padrão ou de testes)
export const sequelize = new Sequelize(
    db.db,
    db.user,
    db.password,
    {
        dialect: 'postgres',
        port: parseInt(db.port)
    }
);