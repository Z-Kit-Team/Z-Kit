const textFilePath = 'assets/splash.txt';

async function displayRandomLine() {
    try {
        const response = await fetch(textFilePath);
        if (!response.ok) throw new Error('Failed to fetch the text file');

        const text = await response.text();
        const lines = text.split('\n').filter(line => line.trim() !== '');

        if (lines.length === 0) throw new Error('No lines found in the text file');

        const randomLine = lines[Math.floor(Math.random() * lines.length)];

        document.getElementById('randomMessage').textContent = "april foul"; // document.getElementById('randomMessage').textContent = randomLine;
    } catch (error) {
        console.error(error);
        document.getElementById('randomMessage').textContent = 'Error loading content';
    }
}

displayRandomLine();
