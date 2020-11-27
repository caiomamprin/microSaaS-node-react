import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:admin1234@localhost:3306/pitu');

export default sequelize;