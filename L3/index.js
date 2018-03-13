const fs = require('fs');

const promisify = function (originalFunction) {

    const doPromisify = function () {

        return new Promise((resolve, reject) => {
            const callback = (err, data) => {
                if (err || data === undefined) {
                    reject(err);
                } else {
                    resolve(data);
                }
            };

            const args = Array.from(arguments);
            args.push(callback);

            originalFunction.apply(null, args);
        });
    };

    return function () { return doPromisify.apply(null, arguments); };
};

const pFsReadFile = promisify(fs.readFile);
const pFsAccess = promisify(fs.access);

pFsReadFile('/etc/passwd').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

pFsAccess('/etc/passwd', fs.constants.W_OK).catch((err) => {
    console.log(err ? 'no access!' : 'WRITE!');
});

pFsAccess('/etc/passwd', fs.constants.R_OK).catch((err) => {
    console.log(err ? 'no access!' : 'read');
});