module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('users', 'email');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
