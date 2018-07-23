export default (sequelize, DataTypes) =>
  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        name: 'users_email',
        msg: 'A user with this email already exists.',
      },
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 255],
        },
      },
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 255],
        },
      },
    },
  }, {
    tableName: 'users',
    underscored: true,
  });
