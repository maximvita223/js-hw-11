// Задание №3
// Рекурсивный поиск элемента по классу
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
    if (root.classList.contains(className)) {
        return root;
    }
    for (let i = 0; i < root.children.length; i++) {
        const found = findElementByClass(root.children[i], className);
        if (found) {
            return found;
        }
    }
    return null;
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); 