const Sequelize = require('sequelize');
const sequelize = require('../index');

const Users = sequelize.define('users', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    house: {
      type: Sequelize.STRING,
      unique: true
    },
    phone: {
      type: Sequelize.CHAR(20),
      allowNull: false,
      unique: true
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
      house: '1403A',
      name: 'EDGAR GONZALEZ',
      phone: '6623605756'
    },
    {
      house: '1403B',
      name: 'GONZALO M. TORRES M.',
      phone: '6624756158'
    },
    {
      house: '1407A',
      name: 'ALEJANDRA LOAIZA GUTIERREZ',
      phone: '6621676585'
    },
    {
      house: '1407B',
      name: 'JUAN FRANCISCO VALENZUELA ABASCAL',
      phone: '6621722332'
    },
    {
      house: '1407C',
      name: 'JESUS ANTONIO CASTRO RODRIGUEZ',
      phone: '6622020345'
    },
    {
      house: '1407D',
      name: 'CRISTINA ELIANA DOMINGUEZ GOMEZ',
      phone: '6621690395'
    },
    {
      house: '1407E',
      name: 'David Romo Montaño',
      phone: '6622228012'
    },
    {
      house: '1407F',
      name: 'ROMMEL MORENO LICEA',
      phone: '6671272676'
    },
    {
      house: '1408A',
      name: 'JONATHAN EDGARDO LOERA VALVERDE',
      phone: '6621699119'
    },
    {
      house: '1408B',
      name: 'CARLOS MAL',
      phone: '6622767355'
    },
    {
      house: '1408C',
      name: 'CRISTINA RIBA ZAMORA',
      phone: '6623250981'
    },
    {
      house: '1408D',
      name: 'TERESITA GOMEZ PADILLA',
      phone: '6421020832'
    },
    {
      house: '1408E',
      name: 'YUVITZA VELASCO',
      phone: '6622334263'
    },
    {
      house: '1408F',
      name: 'Josue Misael',
      phone: '6622383545'
    },
    {
      house: '1413A',
      name: 'ROSELLA BELTRAN',
      phone: '6623607447'
    },
    {
      house: '1413B',
      name: 'ISAAC FERREIRA AMADO',
      phone: '6622815313'
    },
    {
      house: '1413D',
      name: 'Irma Carolina Novela',
      phone: '6621132119'
    },
    {
      house: '1413E',
      name: 'IVONNE MELENDREZ GALVEZ',
      phone: '6623556641'
    },
    {
      house: '1414B',
      name: 'SERGIO PLASENCIA ALVAREZ',
      phone: '6621877466'
    },
    {
      house: '1414C',
      name: 'NORA CAROLINA DORAME RASCON',
      phone: '6623539894'
    },
    {
      house: '1414E',
      name: 'FRANCISCO JAVIER DANZOS',
      phone: '6623687266'
    },
    {
      house: '1419C',
      name: 'Dolores E Rios',
      phone: '6621804890'
    },
    {
      house: '1419D',
      name: 'CLAUDIA ALEJANDRA RUIZ ARCE',
      phone: '6621862802'
    },
    {
      house: '1419E',
      name: 'CHRISTIAN EDUARDO CORTEZ ACOSTA',
      phone: '6622568719'
    },
    {
      house: '1419F',
      name: 'ESTEBAN SALAZAR GARCIA',
      phone: '8110254130'
    },
    {
      house: '1420A',
      name: 'Manuel',
      phone: '6621113483'
    },
    {
      house: '1420B',
      name: 'DAVID  HERNANDEZ BRETI',
      phone: '5533323520'
    },
    {
      house: '1420C',
      name: 'CARLOS TREVIÑO HERNANDEZ',
      phone: '6622990406'
    },
    {
      house: '1420D',
      name: 'JUAN CARLOS VARGAS LEON',
      phone: '6621947241'
    },
    {
      house: '1420E',
      name: 'ALEJANDRO RODRIGUEZ DAVILA',
      phone: '6621061501'
    },
    {
      house: '1420F',
      name: 'DIANA PALOMINO',
      phone: '6621715507'
    },
    {
      house: '1423A',
      name: 'ARTURO VALENZUELA ROBLES',
      phone: '6622990240'
    },
    {
      house: '1423B',
      name: 'PEDRO ALONSO ENCINAS MURRIETA',
      phone: '6623400809'
    },
    {
      house: '1429B',
      name: 'JOB DAVID BARRERA URREA',
      phone: '6621820975'
    },
    {
      house: '1429C',
      name: 'BERTHA RIVERA MORENO',
      phone: '6623484393'
    },
    {
      house: '1429D',
      name: 'RAY MUCIÑO',
      phone: '5523141693'
    },
    {
      house: '1429E',
      name: 'LLUVIA ETHEL MORALES NOPERI',
      phone: '6621822828'
    },
    {
      house: '1429F',
      name: 'NATALIA RODRIGUEZ GUERRERO',
      phone: '6622900311'
    },
    {
      house: '1430B',
      name: 'PERLA SERYN',
      phone: '6621125755'
    },
    {
      house: '1430C',
      name: 'OSCAR DANIEL',
      phone: '6622271813'
    },
    {
      house: '1430E',
      name: 'DALIA MENDIVIL',
      phone: '6621038802'
    },
    {
      house: '1433A',
      name: 'FABIAN R. SAENZ MALDONADO',
      phone: '6624151908'
    },
    {
      house: '1433C',
      name: 'Jose Eli Sandoval Vasquez',
      phone: '6623717693'
    },
    {
      house: '1433D',
      name: 'ALACIEL CANEVETT LOPEZ',
      phone: '6623155302'
    },
    {
      house: '1433F',
      name: 'KEVIN ALEXIS BRYANT ULLOA',
      phone: '6621821098'
    },
    {
      house: '1436B',
      name: 'ANIBAL AGUILERA BRICEÑO',
      phone: '6622017186'
    },
    {
      house: '1436D',
      name: 'Julio Adolfo Sánchez Salas',
      phone: '6621892641'
    },
    {
      house: '1436F',
      name: 'MARTHA REBECA CARLOS IBARRA',
      phone: '6629360154'
    },
    {
      house: '1441A',
      name: 'LULY',
      phone: '6621565172'
    },
    {
      house: '1441C',
      name: 'MARIA GUADALUPE RENDON CAMPA',
      phone: '6621021241'
    },
    {
      house: '1441D',
      name: 'ARTURO CESARETTI CRUZ',
      phone: '6621000311'
    },
    {
      house: '1441E',
      name: 'ENRIQUE DUARTE RUELAS',
      phone: '6622039044'
    },
    {
      house: '1442A',
      name: 'ANTONIO ALVARADO ROJAS',
      phone: '6621314990'
    },
    {
      house: '1442B',
      name: 'SANDRA IBARRA',
      phone: 'BOTELLO	'
    },
    {
      house: '1442C',
      name: 'JAVIER ADRIAN SANDOVAL LIZARRAGA',
      phone: '6621398301'
    },
    {
      house: '1442F',
      name: 'ALMA CRISTINA MORAN ACOSTA',
      phone: '6622275586'
    },
    {
      house: '1450A',
      name: 'MARISELA ROMAN LOUSTAUNAU',
      phone: '6622799649'
    }    
  ]);
});

module.exports = Users;