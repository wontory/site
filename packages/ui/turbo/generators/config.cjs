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
        type: 'add',
        path: 'src/stories/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/story.hbs',
      },
    ],
  })
}

module.exports = generator
