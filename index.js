const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
    extended: true
}) );

app.get('/', (req, res) => {
    if (req.query.busca == null) {
	res.render('index', {});
    } else {
	res.send('Você buscou '+ req.query.busca);
    }
});

app.get('/:slug', (req, res) => {
    res.send(req.params.slug);
});

app.listen(5000, () => {
    console.log('Servidor está rodando na porta 5000');
});
