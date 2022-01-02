const express = require("express")
const app = express()
// const elasticsearch = require('elasticsearch');
// const client = new elasticsearch.Client({
//   host: 'localhost:9200',
//   log: 'trace',
//   apiVersion: '7.1', // use the same version of your Elasticsearch instance
// });
// client.ping({
//     // ping usually has a 3000ms timeout
//     requestTimeout: 1000
//   }, function (error) {
//     if (error) {
//       console.trace('elasticsearch cluster is down!');
//     } else {
//       console.log('All is well');
//     }
//   });

app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render('index')
})


app.listen(3000, () => console.log('Run on 3000'))