import { Project, StringLiteral, SyntaxKind } from 'ts-morph';
import * as fs from 'fs';
import * as path from 'path';

const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
});

// Измените путь, если необходимо обработать другую директорию или шаблон
project.addSourceFilesAtPaths('src/**/*.tsx');

const localesDir = 'public/locales';
const languages = ['en', 'ru']; // Поддерживаемые языки

console.log('Проверка существования директорий для локализаций...');
languages.forEach((lang) => {
    const dirPath = path.join(localesDir, lang);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Создана директория: ${dirPath}`);
    }
});

project.getSourceFiles().forEach((sourceFile) => {
    const namespace = path.basename(
        sourceFile.getFilePath(),
        path.extname(sourceFile.getFilePath()),
    );
    const localizations: { [key: string]: string } = {};

    // console.log(`Обработка файла: ${sourceFile.getFilePath()}`);

    // Находим все вызовы функции t и собираем ключи локализации
    sourceFile.forEachDescendant((node) => {
        if (node.getKind() === SyntaxKind.CallExpression) {
            const callExpr = node.asKind(SyntaxKind.CallExpression);
            if (callExpr) {
                const expr = callExpr.getExpression();
                if (expr.getText() === 't') {
                    const args = callExpr.getArguments();
                    if (
                        args.length > 0 &&
                        SyntaxKind[args[0].getKind()] === 'StringLiteral'
                    ) {
                        const key = (
                            args[0] as StringLiteral
                        ).getLiteralValue();
                        localizations[key] = key; // Используем ключ как значение по умолчанию
                    }
                }
            }
        }
    });

    if (Object.keys(localizations).length > 0) {
        console.log(`Найдены ключи локализации в файле ${namespace}.json`);

        // Создаем или обновляем файлы локализации для каждого языка
        languages.forEach((lang) => {
            const filePath = path.join(localesDir, lang, `${namespace}.json`);
            let content = {};
            if (fs.existsSync(filePath)) {
                content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            }
            Object.assign(content, localizations);
            fs.writeFileSync(
                filePath,
                JSON.stringify(content, null, 2),
                'utf8',
            );
            console.log(`Обновлен файл локализации: ${filePath}`);
        });

        // Обновляем useTranslation() для использования пространства имен
        const useTranslationCalls = sourceFile
            .getVariableDeclarations()
            .filter(
                (v) =>
                    v
                        .getInitializerIfKind(SyntaxKind.CallExpression)
                        ?.getExpression()
                        .getText() === 'useTranslation',
            );

        if (useTranslationCalls.length > 0) {
            console.log(
                `Обновление useTranslation для использования пространства имен: ${namespace}`,
            );
            useTranslationCalls.forEach((v) => {
                v.setInitializer(`useTranslation('${namespace}')`);
            });
        }

        sourceFile.saveSync();
        console.log(`Файл ${sourceFile.getBaseName()} успешно обновлен.`);
    } else {
        // console.log(
        //     `В файле ${sourceFile.getBaseName()} ключи локализации не найдены.`,
        // );
    }
});

console.log('Обработка всех файлов успешно завершена.');
