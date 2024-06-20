import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

// Helper functions to load and save submissions
const loadSubmissions = (): Submission[] => {
    const filePath = path.join(__dirname, '../db.json');
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
};

const saveSubmissions = (submissions: Submission[]) => {
    const filePath = path.join(__dirname, '../db.json');
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf8');
};

// Ping endpoint
app.get('/ping', (req: Request, res: Response) => {
    res.json({ success: true });
});

// Submit endpoint
app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    let submissions = loadSubmissions();
    const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };
    submissions.push(newSubmission);

    saveSubmissions(submissions);
    res.json({ success: true });
});

// Read endpoint
app.get('/read', (req: Request, res: Response) => {
    const submissions = loadSubmissions();
    res.json(submissions);
});

// Delete endpoint
app.delete('/delete', (req: Request, res: Response) => {
    const email: string = req.query.email as string;
    let submissions = loadSubmissions();
    const index = submissions.findIndex(sub => sub.email.toLowerCase() === email.toLowerCase());
    if (index !== -1) {
        submissions.splice(index, 1);
        saveSubmissions(submissions);
        res.json({ message: 'Submission deleted successfully!' });
    } else {
        res.status(404).json({ message: 'Submission not found!' });
    }
});

// Search endpoint
app.get('/search', (req: Request, res: Response) => {
    const email: string = req.query.email as string;
    const submissions = loadSubmissions();
    const searchResults = submissions.filter(sub => sub.email.toLowerCase() === email.toLowerCase());
    res.json(searchResults);
});

// Update endpoint
app.put('/edit/:email', (req: Request, res: Response) => {
    const email: string = req.params.email;
    const { name, phone, github_link, stopwatch_time } = req.body;

    let submissions = loadSubmissions();
    const index = submissions.findIndex(sub => sub.email.toLowerCase() === email.toLowerCase());
    if (index !== -1) {
        submissions[index] = { ...submissions[index], name, phone, github_link, stopwatch_time };
        saveSubmissions(submissions);
        res.json({ message: 'Submission updated successfully!' });
    } else {
        res.status(404).json({ message: 'Submission not found!' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
