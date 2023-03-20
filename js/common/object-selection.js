const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 },
];

const getworthyworkers = (workersarr) => {
    const worthyworkers = [];

    for (let i = 0; i < workersarr.length; i++) {
        const currentworker = workersarr[i];

        if (currentworker.salary > 1000) {
            worthyworkers.push(currentworker.name);
        }
    }

    return worthyworkers;
};

console.log(getworthyworkers(workers));