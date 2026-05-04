const fs = require('fs');

// read files

// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


//writing files

// fs.writeFile('./docs/blog.txt', 'this is a different text for you', () => {
//     console.log('file written');
// });


// directories

// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('directory created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

// dlete files

if (fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}

