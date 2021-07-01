
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_inputs').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_inputs').insert([
        {id: 1, name: 'Create a new react app', description: 'npx create-react-app <fileName>', category: 'react'},
        {id: 2, name: 'Start your local server', description: 'npm start', category: 'git'},
        {id: 3, name: 'Component based template', description: 'function App() { return ( ); } export default App;', category: 'javascript'},
        {id: 4, name: 'Main header of HTML file', description: '<!DOCTYPE html>', category: 'html'},
        {id: 5, name: 'tools to style', description: 'material, bootstrap, styled components, css', category: 'styling'},
        {id: 6, name: 'Select all values in a table', description: 'SELECT * FROM <table_name>', category: 'sql'}

      ]);
    });
};