let map = new Map();

map.set('1', 'one');   // рядок як ключ
map.set(1, 'num1');     // цифра як ключ
map.set(true, 'bool1'); // булеве значення як ключ

console.log( map.get(1) );   // 'num1'
console.log( map.get('1') ); // 'one'

console.log( map.has(1) );   // true
console.log( map.has('1') ); // true
console.log( map.has(false) ); // false

console.log( map.size ); // 3

map.delete(1); // видаляємо ключ 1

console.log( map.has(1) );   // false
console.log( map.size ); // 2

map.clear();

console.log( map.size ); // 0

function testMap() {
    let map = new Map();
// перевірка наявності ключів у мапі після їх додавання
    map.set('1', 'one');
    map.set(1, 'num1');
    map.set(true, 'bool1');

    if (map.has('1') && map.has(1) && map.has(true)) {
        console.log("Test passed: keys are present");
    } else {
        console.log("Test failed: keys are not present");
    }

// перевірка значень за ключами
    if (map.get(1) === 'num1' && map.get('1') === 'one') {
        console.log("Test passed: values are correct");
    } else {
        console.log("Test failed: values are incorrect");
    }

// перевірка наявності ключів після видалення
    map.delete(1);
    if (!map.has(1) && map.size === 2) {
        console.log("Test passed: key was deleted");
    } else {
        console.log("Test failed: key was not deleted");
    }

// перевірка розміру мапи
    map.clear();
    if (map.size === 0) {
        console.log("Test passed: map was cleared");
    } else {
        console.log("Test failed: map was not cleared");
    }
}

testMap();
