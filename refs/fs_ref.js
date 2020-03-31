const fs = require('fs')
// file system

const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw new Error(err)

//   console.log('directory was created')
// })

// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello world!',
//   err => {
//     if (err) throw new Error(err)

//     console.log('file was created')

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' from append file',
//       err => {
//         if (err) throw new Error(err)

//         console.log('file was changed')

//         fs.readFile(
//           path.join(__dirname, 'notes', 'mynotes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw new Error(err)

//             console.log(data)
//           }
//         )
//       }
//     )
//   }
// )

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw new Error(err)

    console.log('file was renamed')
  }
)
