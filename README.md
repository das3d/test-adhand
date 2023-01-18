React, RTK, axios template

## 💾Get started
- npm run dev
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

## Redux

Каждая часть глобалбного стора должна быть разделена по слайсам
Not all data must be in global state!

