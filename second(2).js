const Zoo = {
    animals: [],

    // Додати тварину до зоопарку
    addAnimal(name, count) {
        const animal = {
            name: name,
            count: count
        };

        this.animals[this.animals.length] = animal;
    },

    // Видалити тварину зі зоопарку
    removeAnimal(name) {
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].name === name) {
                this.animals.splice(i, 1);
                break;
            }
        }
    },

    // Перевірити, чи є тварина в зоопарку
    hasAnimal(name) {
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].name === name) {
                return true;
            }
        }

        return false;
    },

    // Вивести кількість певної тварини
    getAnimalCount(name) {
        let count = 0;

        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].name === name) {
                count += this.animals[i].count;
            }
        }

        return count;
    },

    // Вивести кількість усіх тварин
    getTotalCount() {
        let count = 0;

        for (let i = 0; i < this.animals.length; i++) {
            count += this.animals[i].count;
        }

        return count;
    },

    // Вивести назви тварин з певною кількістю
    getAnimalsWithCount(count) {
        const animalNames = [];

        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].count === count) {
                animalNames.push(this.animals[i].name);
            }
        }

        return animalNames;
    },

    // Вивести всіх тварин у порядку додавання
    getAllAnimals() {
        const animalNames = [];

        for (let i = 0; i < this.animals.length; i++) {
            animalNames.push(this.animals[i].name);
        }
        return animalNames;
    },
    sortAnimalsByQuantity() {
        const sortedAnimals = [...this.animals];
        for (let i = 0; i < sortedAnimals.length - 1; i++) {
            for (let j = i + 1; j < sortedAnimals.length; j++) {
                if (sortedAnimals[i].quantity > sortedAnimals[j].quantity) {
                    const temp = sortedAnimals[i];
                    sortedAnimals[i] = sortedAnimals[j];
                    sortedAnimals[j] = temp;
                }
            }
        }
        return sortedAnimals;
    }
};

function testZoo() {
    const zoo = Object.create(Zoo);

    // Тест додавання тварин
    zoo.addAnimal('lion', 3);
    zoo.addAnimal('tiger', 2);
    zoo.addAnimal('giraffe', 1);
    zoo.addAnimal('zebra', 4);

    const allAnimals = zoo.getAllAnimals();
    if (allAnimals.length !== 4 ||
        allAnimals[0] !== 'lion' ||
        allAnimals[1] !== 'tiger' ||
        allAnimals[2] !== 'giraffe' ||
        allAnimals[3] !== 'zebra') {
        console.error('Test failed: getAllAnimals()');
    }

    // Тест видалення тварин
    zoo.removeAnimal('giraffe');
    if (zoo.hasAnimal('giraffe')) {
        console.error('Test failed: removeAnimal()');
    }

    // Тест перевірки наявності тварин
    if (!zoo.hasAnimal('lion') || !zoo.hasAnimal('tiger') || !zoo.hasAnimal('zebra')) {
        console.error('Test failed: hasAnimal()');
    }

    // Тест отримання кількості певної тварини
    if (zoo.getAnimalCount('lion') !== 3 || zoo.getAnimalCount('tiger') !== 2 || zoo.getAnimalCount('zebra') !== 4) {
        console.error('Test failed: getAnimalCount()');
    }

    // Тест отримання загальної кількості тварин
    if (zoo.getTotalCount() !== 9) {
        console.error('Test failed: getTotalCount()');
    }

    // Тест отримання назв тварин з певною кількістю
    const animalsWithCount2 = zoo.getAnimalsWithCount(2);
    if (animalsWithCount2.length !== 1 || animalsWithCount2[0] !== 'tiger') {
        console.error('Test failed: getAnimalsWithCount()');
    }

    // Тест сортування тварин за кількістю
    const sortedAnimals = zoo.sortAnimalsByQuantity();
    if (sortedAnimals.length !== 3 ||
        sortedAnimals[0].name !== 'tiger' || sortedAnimals[0].count !== 2 ||
        sortedAnimals[1].name !== 'lion' || sortedAnimals[1].count !== 3 ||
        sortedAnimals[2].name !== 'zebra' || sortedAnimals[2].count !== 4) {
        console.error('Test failed: sortAnimalsByQuantity()');
    }

    console.log('All tests passed!');
}

testZoo();
