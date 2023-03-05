let zoo = [];

function getCountOfAnimal(animalName) {
    let animal = zoo.find((a) => a.name === animalName);
    if (animal) {
        return animal.count;
    } else {
        console.log("Такої тварини як " + animalName + " немає в зоопарку");
    }
}

function getTotalCount() {
    let totalCount = zoo.reduce((total, animal) => total + animal.count, 0);
    console.log(`Загальна кількість тварин: ${totalCount}`);
}

function getAnimalNamesByCount(count) {
    let animalNames = zoo
        .filter((animal) => animal.count === count)
        .map((animal) => animal.name);
    if (animalNames.length > 0) {
        console.log(`Тварини з кількістю ${count}: ${animalNames.join(", ")}`);
    } else {
        console.log(`Тварин з кількістю ${count} не знайдено`);
    }
}

function getAnimalsSortedByCount() {
    const sortedAnimals = zoo.slice().sort((a, b) => a.count - b.count);
    console.log("Тварини, відсортовані за кількістю:");
    sortedAnimals.forEach((animal) => console.log(`${animal.name}: ${animal.count}`));
}

function addAnimal(animalName, count) {
    zoo.push({ name: animalName, count });
    console.log(`${count} ${animalName} додано до зоопарку`);
}

function showAllAnimals() {
    console.log("Всі тварини:");
    zoo.forEach((animal) => console.log(`${animal.name}: ${animal.count}`));
}

function removeAnimal(animalName) {
    const index = zoo.findIndex((a) => a.name === animalName);
    if (index >= 0) {
        zoo.splice(index, 1);
        console.log(`${animalName} видалено з зоопарку`);
    } else {
        console.log(`${animalName} не знайдено`);
    }
}

function hasAnimal(animalName, zoo) {
    return zoo.some(animal => animal.name === animalName);
}

function testZoo() {
    addAnimal("Lion", 5);
    addAnimal("Bear", 1);
    addAnimal("Fox", 4);
    addAnimal("Elephant", 1);
    addAnimal("Hippo", 3);
    addAnimal("Panda", 2);

    console.log(getCountOfAnimal("Лев")); // Такої тварини як Лев немає в зоопарку
    console.log(getCountOfAnimal("Hippo")); //3

    getTotalCount(); // Загальна кількість тварин: 16

    getAnimalNamesByCount(1); // Тварини з кількістю 1: Bear, Elephant
    getAnimalNamesByCount(6); // Тварин з кількістю 6: не знайдено

    getAnimalsSortedByCount();
    // Тварини, відсортовані за кількістю:
    //Bear: 1
    //Elephant: 1
    //Panda: 2
    //Hippo: 3
    //Fox: 4
    //Lion: 5

    showAllAnimals();
    // Всі тварини:
    //Lion: 5
    //Bear: 1
    //Fox: 4
    //Elephant: 1
    //Hippo: 3
    //Panda: 2

    removeAnimal("Fox");
    showAllAnimals();
    // Всі тварини:
    //Lion: 5
    //Bear: 1
    //Elephant: 1
    //Hippo: 3
    //Panda: 2

    console.log(hasAnimal("Лев", zoo)); // false
    console.log(hasAnimal("Lion", zoo)); // true
}

testZoo();
