// 1 use esercizio
// 2 db.createCollection('movies')
// 3 db.post.insertMany(
// 4 db.movies.insertMany(
//   [
//     {
//     title: "Quel momento imbarazzante",
//     type: 'Comedy',
//     relasedYear: '2014'
//     },
//      {
//     title: "Warrior",
//     type: 'Drama',
//     relasedYear: '2011'
//     },
//     {
//         title: "Inception",
//         type: 'Thriller',
//         relasedYear: '2011'
//         },
//          {
//         title: "Segui il tuo cuore",
//         type: 'Drama',
//         relasedYear: '2010'
//         },
//         {
//             title: "The wolf of wall street",
//             type: 'Drama',
//             relasedYear: '2013'
//             },
//              {
//             title: "Come un tuono",
//             type: 'Drama',
//             relasedYear: '2013'
//             },
//             {
//               title: "Amici, amanti, e",
//               type: 'Drama',
//               relasedYear: '2011'
//               },
//     ]
//   )
// )

// 5 db.movies.updateOne({title:'The wolf of Wall street'},
//     {
//     $set:{
//     type:'Bio'
//     }
//     })

// 6 db.movies.deleteOne({title:'Amici, amanti, e'})
