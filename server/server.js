const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('hey')
})

app.post('/api/send', (req, res) => {
    
let message = req.body;
console.log(message)

}
)


app.listen(3001, () => {
    console.log(`Server running on port 3001`)
})