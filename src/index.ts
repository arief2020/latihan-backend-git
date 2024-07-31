import express, {Request, Response} from 'express'

const app = express()
const port = 3000;

app.use(express.json());

// Endpoint for user register
app.post('/register', (req: Request, res: Response) => {
    const { username, password } = req.body;
    // Logic User Register
    res.send('User registered');
});

// Endpoint user Login
app.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    // Logic user login
    res.send('User logged in');
});

// Endpoint add product
app.post("/products", (req: Request, res: Response) => {
  const { name, price } = req.body;
  // Logic to add product
  res.send("Product added");
});

// Endpoint to get all products
app.get("/products", (req: Request, res: Response) => {
  // logic to get all products
  res.send("List of products");
});

// Endpoint add product
app.post('/products', (req: Request, res: Response) => {
    const { name, price } = req.body;
    // Logic to add product
    res.send('Product added');
});

// Endpoint to get all products
app.get('/products', (req: Request, res: Response) => {
    // logic to get all products
    res.send('List of products');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});