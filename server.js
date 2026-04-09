const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// In-memory store for demo purposes
const submissions = [];

app.use(express.static(path.join(__dirname, "public")));

app.get("/submissions", (req, res) => {
  res.json(submissions);
});

app.post("/submit", (req, res) => {
  const { step1, step2, step3 } = req.body;
  if (!step1) return res.status(400).json({ error: "step1 required" });
  const entry = {
    id: submissions.length + 1,
    step1,
    step2: step2 || null,
    step3: step3 || null,
    timestamp: new Date().toISOString(),
  };
  submissions.push(entry);
  res.json({ ok: true, entry });
});

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`),
);
