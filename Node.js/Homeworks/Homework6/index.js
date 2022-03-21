const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa(); // Instantiate Koa
const router = Router(); //Instantiate the router

const str = (pageName) => `<h1>Welcome to: ${pageName} PAGE</h1>`; // helper function

router.get('/', (ctx) => {
  ctx.response.status = 200;
  ctx.body = str('INDEX');
});

router.get('/about-me', (ctx) => {
  ctx.response.status = 200;
  ctx.body = str('ABOUT');
});

router.get('/contact', (ctx) => {
  ctx.response.status = 200;
  ctx.body = str('CONTACT');
});

router.get('/error', (ctx) => {
  ctx.response.status = 404;
  ctx.body = '<h1>404 PAGE DOES NOT EXIST</h1>';
});

app.use(router.routes()); //Use the routes defined using the router
app.use(router.allowedMethods()); // Use allowed requests

// catch all middleware, only land here
// if no other routing rules match
// make sure it is added after everything else
app.use(function* () {
  this.redirect('/error'); // catches all other links, similar to expressjs '*'
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is working at port number: ${port}`);
});
