/**
 * @param {import('@turbo/gen').PlopTypes.NodePlopAPI} plop
 */
function generator(plop) {
  plop.setGenerator('component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'append',
        path: 'package.json',
        pattern: /"exports": {(?<insertion>)/g,
        template: '    "./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
      },
    ],
  })
}

module.exports = generator
