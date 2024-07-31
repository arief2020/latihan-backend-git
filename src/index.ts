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


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});