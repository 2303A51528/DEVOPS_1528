async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:', data);
  } catch (error) {
    console.error('Failed to read file:', error.message);
  }
}
