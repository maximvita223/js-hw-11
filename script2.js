// Задание №2
// Создание счетчика
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с
// тремя методами: increment, decrement и getValue. Метод increment должен
// увеличивать значение счетчика на 1, метод decrement должен уменьшать значение
// счетчика на 1, а метод getValue должен возвращать текущее значение счетчика.
// Значение счетчика должно быть доступно только через методы объекта, а не
// напрямую.


function createCounter(incre) {
    return {
        increment(){
            incre++;
            return incre;
        },
        decrement(){
            incre--;
            return incre;
        },
        getValue(){
            return incre;
        }
    }
}

let count = createCounter(0)

console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.increment());
console.log(count.getValue());