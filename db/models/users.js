const Sequelize = require('sequelize');
const sequelize = require('../index');

const Users = sequelize.define('users', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    },
    house: {
      type: Sequelize.STRING,
      unique: true
    },
    phone: {
      type: Sequelize.CHAR(20)
    },
    description: {
      type: Sequelize.TEXT
    },
    role: {
      type: Sequelize.INTEGER
    },
    zone: {
      type: Sequelize.STRING
    },
    avatar: {
      type: Sequelize.STRING
    }
});

sequelize.sync({
  force: true,
  logging: true
}).then(() => {
  Users.bulkCreate([
    {
      firstName: 'Jesus Antonio',
      lastName: 'Castro Rodriguez',
      email: 'jesus.castro3@gmail.com',
      house: '1407C',
      phone: '6622020345',
      description: '',
      role : 1,
      zone: 4,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvGJ6F_FerkBkwUuV4ilsHYoTPIMSs5hpK_xE7qc83mznw9cw'
    },
    {
      firstName: 'Christian Eduardo',
      lastName: 'Cortez Acosta',
      email: 'chxris@hotmail.com',
      house: '1419E',
      phone: '6622568719',
      description: '',
      role : 2,
      zone: 4,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvGJ6F_FerkBkwUuV4ilsHYoTPIMSs5hpK_xE7qc83mznw9cw'
    },
    {
      firstName: 'Ivonne Melendrez',
      lastName: 'Galvez',
      email: 'arq.ivonnemg@gmail.com',
      house: '1413E',
      phone: '6623556641',
      description: '',
      role : 2,
      zone: 4,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvGJ6F_FerkBkwUuV4ilsHYoTPIMSs5hpK_xE7qc83mznw9cw'
    },
    {
      firstName: 'Martha Carlos',
      lastName: 'Ibarra',
      email: 'marthacarlosi@gmail.com',
      house: '1436F',
      phone: '6629360154',
      description: '',
      role : 2,
      zone: 1,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvGJ6F_FerkBkwUuV4ilsHYoTPIMSs5hpK_xE7qc83mznw9cw'
    },
    {
      firstName: 'Ramón Tadeo',
      lastName: 'Ibarra Platt',
      email: 'acma2205@gmail.com',
      house: '1433D',
      phone: '6621195878',
      description: '',
      role : 2,
      zone: 2,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvGJ6F_FerkBkwUuV4ilsHYoTPIMSs5hpK_xE7qc83mznw9cw'
    },
    {
      firstName: 'Alma Cristina',
      lastName: 'Moran Acosta',
      email: 'acma22054@gmail.com',
      house: '1442F',
      phone: '6622275586',
      description: '',
      role : 2,
      zone: 1,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvGJ6F_FerkBkwUuV4ilsHYoTPIMSs5hpK_xE7qc83mznw9cw'
    },
    {
      firstName: 'Claudia Alejandra',
      lastName: 'Ruiz Arce',
      email: 'Ruiz.Arce@gmail.com',
      house: '1419D',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum animi et distinctio facere. Animi cum nisi, repellat laborum nam vero quas nihil quo eum enim laudantium quisquam praesentium commodi.',
      role : 2,
      zone: 3
    },
    {
      firstName: 'Maria Guadalupe',
      lastName: 'Rendon Campa',
      email: 'Rendon.Campa@gmail.com',      
      house: '1441C',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum animi et distinctio facere. Animi cum nisi, repellat laborum nam vero quas nihil quo eum enim laudantium quisquam praesentium commodi.',
      role : 1,
      zone: 3
    },
    {
      firstName: 'Yuvitza',
      lastName: 'Velasco',
      email: 'Yuvitza.Velasco@gmail.com',
      house: '1408E',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum animi et distinctio facere. Animi cum nisi, repellat laborum nam vero quas nihil quo eum enim laudantium quisquam praesentium commodi.',
      role : 1,
      zone: 2
    },
    {
      firstName: 'Alicia',
      lastName: 'Garcia',
      email: 'Alicia.Garcia@gmail.com',
      house: '1436B',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum animi et distinctio facere. Animi cum nisi, repellat laborum nam vero quas nihil quo eum enim laudantium quisquam praesentium commodi.',
      role : 1,
      zone: 2
    }  
  ])
});

module.exports = Users;