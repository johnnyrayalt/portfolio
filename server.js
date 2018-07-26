const express = require('express');
const app = express();
app.use(express.static(__dirname + '/build/'));
app.listen(process.env.PORT || 8080);
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
