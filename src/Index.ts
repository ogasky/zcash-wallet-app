import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Example endpoint
app.get('/', (req, res) => {
  res.send('Zcash backend API is running');
});

// Wallet endpoint (to integrate your generateZcashWallet function later)
app.get('/api/wallet', async (req, res) => {
  // Here you'd import and use your `generateZcashWallet` function
  res.json({ message: 'Wallet generation endpoint' });
});

app.listen(port, () => {
  console.log(`Backend API is running at http://localhost:${port}`);
});
