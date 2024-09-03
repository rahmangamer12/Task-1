// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let teams = {};

app.use(express.json());

// Create a new team
app.post('/create-team', (req, res) => {
  const { teamId, name } = req.body;
  if (!teams[teamId]) {
    teams[teamId] = { name, members: [] };
    res.status(201).send({ message: 'Team created', teamId });
  } else {
    res.status(400).send({ message: 'Team already exists' });
  }
});

// Invite to a team
app.get('/invite/:teamId/:memberId', (req, res) => {
  const { teamId, memberId } = req.params;
  const team = teams[teamId];

  if (team) {
    if (!team.members.includes(memberId)) {
      team.members.push(memberId);
      res.send("You have successfully joined the team!");
    } else {
      res.send("You are already part of the team!");
    }
  } else {
    res.status(404).send("Team not found");
  }
});

// Get team members
app.get('/team/:teamId', (req, res) => {
  const { teamId } = req.params;
  const team = teams[teamId];

  if (team) {
    res.json(team);
  } else {
    res.status(404).send("Team not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
