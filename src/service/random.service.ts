const RandExp = require("randexp");

type tRandomType = {
    [key: string]: {
        typeName: string,
        function: Function
    }
}

const randomType: tRandomType = {
    regexp : {
        typeName: 'RegExp',
        function: (regexp: string) => {
            console.log('RegExp')
            if (!regexp) console.error('RegExp')
            // const payload = new RandExp(regex, 'i').gen();
            return new RandExp(regexp).gen();
        }
    },
    th_citizen_id : {
        typeName: 'Thai Citizen ID',
        function: (option: string) => {
            console.log('th_citizen_id')
            const random = Math.floor(100000000000 + Math.random() * 900000000000);
            let sum = 0;
            random
                .toString()
                .split("")
                .reverse()
                .forEach((number, index) => {
                    sum += +number * (index + 2);
                });
            let suffix = 11 - (sum % 11);
            if (suffix > 9) suffix -= 10;
            return `${random}${suffix}`;
        }
    }
}

export const randomService = (type: string, option?: any) => {
    console.log('random', type, option)
    return randomType[type].function(option)
}