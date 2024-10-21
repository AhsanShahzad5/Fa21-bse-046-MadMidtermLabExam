import express, { Request, Response } from 'express';

// Initialize Express app
const app = express();
const PORT = 3001;

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Proxy route to fetch data from the external API
app.get('/products', async (req: Request, res: Response) => {
  const apiUrl = 'https://simple-grocery-store-api.online/products';

  try {
    // Use fetch to get the external API data
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Return the data to the frontend
    res.json(data);
  } catch (error) {
    console.error('Error fetching from external API:', error);
    res.status(500).send('Error fetching data from external API');
  }
});

// Start the proxy server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
