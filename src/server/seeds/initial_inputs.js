
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_inputs').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_inputs').insert([
        {id: 1, name: 'Create a new react app', description: 'npx create-react-app <fileName>', category: 'react'},
        {id: 2, name: 'Start a file', description: 'npm start', category: 'git'},
        {id: 3, name: 'install stuff', description: 'npm install <package>', category: 'git'}
      ]);
    });
};
