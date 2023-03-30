const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());

// Routes
// Mock data for the appointments
app.get('/appointments', (req, res) => {
    const appointments = [
        
      ];
    res.json(appointments);
  });

  // Mock data for the substitution plans
app.get('/classes/plan', (req, res) => {
    const plans = [
        
      ];
    res.json(plans);
});

// Mock data for the menu plan
app.get('/menu', (req, res) => {
    const menu = [
        
      ];
      res.json(menu);
});
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});