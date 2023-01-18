🦄 React, RTK, axios template

## 💾Get started

```Shell
npm set "@unistory:registry" "https://npm.unistory.app"

npx create-react-app <project-name> --template @unistory/unistory

```

## 📁Structure
- **.husky**
- **.vscode**
- **public**
- **src**
  
  - **app**
    - **store**
    - **routing**
  
  - **pages** 
  
  - **widgets**
    - **layout**
  
  - **features**
  
  - **entities**
  
  - **blockchain** 
    - **config** 
    - **lib** 
      - **typechain** 
      - **abi** 
    - **model** 
  
  - **shared** 
    - **ui**
    - **lib**
    - **api**
      - **controllers** 
      - **gql** 
    - **styles** 
  

## 📖Tooling

1. [tailwind](https://tailwindcss.com/)
2. [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
3. [react](https://reactjs.org/docs/getting-started.html)
4. [react-router](https://reactrouter.com/docs/en/v6/getting-started/overview)
5. [typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
6. [husky](https://typicode.github.io/husky/#/)
7. [feature-sliced](https://feature-sliced.design/)

## 🆔Naming

### 1. cebab-case, dot notaion
  - слова разделяются дефисом
  - все маленькие буквы
  - **названия файла**`.`**тип файла**`.`**(ts | scss)** и другие... (например file.interface.ts)

### 2. File naming by types
  1. Хоки начинать с приставки `with-` c типом `.hoc.tsx`
  2. Хуки начинать с приставки `use-` c типом `.hook.tsx`
  3. Константы - `.constant.ts`
  4. Services - `.service.ts`
  5. Utils - `.ts`
  6. Slices - `.slice.ts`
  7. Actions - `.actions.ts`
  8. Styles - `.module.scss`
  9. Pages - `index.page.tsx`
  10. Layouts - `.layout.tsx`
  11. RTK query api - `.api.ts`
  12. Models - `.model.ts`
  13. DTO - `.dto.ts`
  14. Enums - `.enum.ts`

### 3. Pages  
  1. Имена папок страниц - `cebab case`
  2. В каждой папке со страницей должен присутстовать файл `index.page.ts` в котором находится сам компонент страницы => *пример* `pages/about/index.page.ts` 


## 📜Conventions 
1. Все импорты между модулями стараемся делать через **alias**, при необходимости можно добавить новые alias в проект
2. Для идентичности проектов `React` и `Next` пришлось выбрать варант наименования страниц где в каждой папке со страницей лежит файл `index.page.ts`

## 🐺Husky

Для маленьких проектов `Husky` будет излишним, поэтому от него можно легко избавится.
Для этого удалите папку `.husky` в корне проекта, и все, надоедливый охранник коммитов покинет проект.

## Redux

Каждая часть глобалбного стора должна быть разделена по слайсам
Not all data must be in global state!


## ⚠️Warning section

**useDapp** может генерировать большое количество запросов к ноде. Большое количество запросов может привести к скоропостижному падению ноды. В данном шаблоне указана задержка в 20 секунд для запросов, которые идут в фоне, при подключении библиотеки. Но помимо них могут быть и другие, которые возникают при использовании библиотеки (обращение к методам контракта, подписки). 

**ПО этой причине при использовании useDapp нужно обязательно проверять не уходит ли десяток запросов каждую секунду!**


## 🔥Если есть желание улучшить конфиг

1. запустите `git clone https://github.com/Neca-development/react-rtk-template.git`
2. сделайте изменения **вне** `template` папки
3. повысьте уровень **package.json** в поле `version`
4. если были изменены `dependencies` или `devDependencies` перенесить новый список в файл `template.json` в корне
5. запустите следующие команды:
6. `npm login --registry https://npm.unistory.app`
7. _login_ и _password_ можно посмотреть в `Notion`
8. `npm publish --registry https://npm.unistory.app`
9.  Незабудьте залить изменения в наш репозиторий   
`git add .`  
`git commit -m "feat: some changes"`  
`git push origin <branch name>`  

