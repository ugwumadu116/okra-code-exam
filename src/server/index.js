import express from 'express';
import os from 'os';
import router from './routes';

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.use('/api', router);

// Catch Errors
app.use('*', (req, res) => res.status(404).json({
  status: res.statusCode,
  error: 'Sorry!!, the page you are looking for cannot be found'
}));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
