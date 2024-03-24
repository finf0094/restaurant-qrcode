// Динамический импорт inquirer
const inquirerPromise = import('inquirer');
const createTemplate = require('./templates/createTemplate');

const layers = ['features', 'entities', 'pages'];

async function main() {
    const inquirer = await import('inquirer');
    const answers = await inquirer.default.prompt([
        // Обратите внимание на .default
        {
            type: 'list',
            name: 'layer',
            message: 'Выберите слой:',
            choices: ['features', 'entities', 'pages'],
        },
        {
            type: 'input',
            name: 'sliceName',
            message: 'Укажите название слайса:',
            validate: function (input) {
                return input.trim()
                    ? true
                    : 'Название слайса не может быть пустым.';
            },
        },
    ]);

    // Предполагается, что createTemplate поддерживает асинхронный вызов
    createTemplate(answers.layer, answers.sliceName);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
