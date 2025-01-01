/**
 * @param {import('@turbo/gen').PlopTypes.NodePlopAPI} plop
 * @returns {void}
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
        path: 'src/components/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'append',
        path: 'package.json',
        pattern: /"exports": {(?<insertion>)/g,
        template:
          '    "./{{kebabCase name}}": "./src/components/{{kebabCase name}}.tsx",',
      },
    ],
  })
}

module.exports = generator
