function testCityTemperatures() {
    const cityTemperatures = {
        temperatures: {
            "Київ": 9,
            "Миколаїв": 9,
            "Одеса": 10,
            "Южноукраїнськ": 12,
        },

        cityTemperaturesToString() {
            let result = '';
            for (const [city, temperature] of Object.entries(this.temperatures)) {
                result += `${city}: ${temperature};\n`;
            }
            return result;
        },

        cityTemperaturesToNumber() {
            let sum = 0;
            let count = 0;
            for (const temperature of Object.values(this.temperatures)) {
                if (typeof temperature === 'number') {
                    sum += temperature;
                    count++;
                }
            }
            return count === 0 ? 0 : sum / count;
        },

        [Symbol.toPrimitive](hint) {
            if (hint === 'string') {
                return this.cityTemperaturesToString();
            }
            if (hint === 'number') {
                return this.cityTemperaturesToNumber();
            }
            return NaN;
        }
    };

    // Test cityTemperaturesToString method
    const expectedStringOutput = "Київ: 9;\nМиколаїв: 9;\nОдеса: 10;\nЮжноукраїнськ: 12;\n";
    const actualStringOutput = cityTemperatures.cityTemperaturesToString();
    if (actualStringOutput !== expectedStringOutput) {
        console.error(`Test failed: Expected "${expectedStringOutput}", but got "${actualStringOutput}"`);
    } else {
        console.log(`Test passed: cityTemperaturesToString method returned "${actualStringOutput}"`);
    }

    // Test cityTemperaturesToNumber method
    const expectedNumberOutput = 10;
    const actualNumberOutput = cityTemperatures.cityTemperaturesToNumber();
    if (actualNumberOutput !== expectedNumberOutput) {
        console.error(`Test failed: Expected "${expectedNumberOutput}", but got "${actualNumberOutput}"`);
    } else {
        console.log(`Test passed: cityTemperaturesToNumber method returned "${actualNumberOutput}"`);
    }

    // Test Symbol.toPrimitive method with 'string' hint
    const expectedToStringOutput = expectedStringOutput;
    const actualToStringOutput = String(cityTemperatures);
    if (actualToStringOutput !== expectedToStringOutput) {
        console.error(`Test failed: Expected "${expectedToStringOutput}", but got "${actualToStringOutput}"`);
    } else {
        console.log(`Test passed: Symbol.toPrimitive method with 'string' hint returned "${actualToStringOutput}"`);
    }

    // Test Symbol.toPrimitive method with 'number' hint
    const expectedToNumberOutput = expectedNumberOutput;
    const actualToNumberOutput = Number(cityTemperatures);
    if (actualToNumberOutput !== expectedToNumberOutput) {
        console.error(`Test failed: Expected "${expectedToNumberOutput}", but got "${actualToNumberOutput}"`);
    } else {
        console.log(`Test passed: Symbol.toPrimitive method with 'number' hint returned "${actualToNumberOutput}"`);
    }
}

testCityTemperatures();
