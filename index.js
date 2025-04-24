const express = require('express');

const app = express();
const PORT = 5000; // Hardcoded, since no .env used

// Use built-in JSON parser
app.use(express.json());

app.post('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;

    // Validation
    if (!username) {
        return res.status(400).json({ error: "Username cannot be empty" });
    }

    if (!email) {
        return res.status(400).json({ error: "Email cannot be empty" });
    }

    if (!password || password.length < 8 || password.length > 16) {
        return res.status(400).json({
            error: "Password length should be greater than 8 or less than or equal to 16"
        });
    }

    if (!dateOfBirth) {
        return res.status(400).json({ error: "Date of Birth is required" });
    }

    // Simulate user creation
    const newUser = { username, email, password, dateOfBirth };
    console.log('User created:', newUser);

    res.status(201).json({ message: "User registered successfully", user: newUser });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
