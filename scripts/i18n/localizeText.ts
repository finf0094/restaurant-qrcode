import { Project, SyntaxKind } from 'ts-morph';

const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
});

console.log('Начало обработки TSX файлов...');

project.addSourceFilesAtPaths('src/**/*.tsx');

project.getSourceFiles().forEach((sourceFile) => {
    // console.log(`Обработка файла: ${sourceFile.getFilePath()}`);
    let modificationsCount = 0;

    sourceFile.forEachDescendant((node) => {
        if (SyntaxKind[node.getKind()] === 'JsxText') {
            const jsxText = node;
            // Удаляем начальные и конечные пробелы, а также заменяем последовательности пробелов на один пробел
            const text = jsxText.getFullText().trim().replace(/\s\s+/g, ' ');
            if (text && !text.startsWith('{t(') && !text.includes('\n')) {
                // Оборачиваем текст в t('...'), экранируя одинарные кавычки
                const newText = `{t('${text.replace(/'/g, "\\'")}')}`;
                jsxText.replaceWithText(newText);
                // eslint-disable-next-line no-plusplus
                modificationsCount++;
            }
        }
    });

    if (modificationsCount > 0) {
        console.log(
            `В файле ${sourceFile.getBaseName()} выполнено изменений: ${modificationsCount}.`,
        );
        sourceFile.saveSync();
    } else {
        // console.log(
        //     `В файле ${sourceFile.getBaseName()} изменений не обнаружено.`,
        // );
    }
});

console.log('Обработка TSX файлов успешно завершена.');
