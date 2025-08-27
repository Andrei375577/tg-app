import React, { useState } from 'react';

const FileManager = () => {
    const [files, setFiles] = useState<{ name: string; type: string; content: string }[]>([]);
    const [newFileName, setNewFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState<{ name: string; type: string; content: string } | null>(null);

    const createFile = (type: string) => {
        if (newFileName) {
            const newFile = { name: newFileName, type, content: '' };
            setFiles([...files, newFile]);
            setNewFileName('');
        }
    };

    const deleteFile = (name: string) => {
        setFiles(files.filter(file => file.name !== name));
        if (selectedFile?.name === name) {
            setSelectedFile(null);
        }
    };

    const selectFile = (file: { name: string; type: string; content: string }) => {
        setSelectedFile(file);
    };

    const updateFileContent = (content: string) => {
        if (selectedFile) {
            const updatedFiles = files.map(file => 
                file.name === selectedFile.name ? { ...file, content } : file
            );
            setFiles(updatedFiles);
            setSelectedFile({ ...selectedFile, content });
        }
    };

    return (
        <div>
            <h2>File Manager</h2>
            <input 
                type="text" 
                value={newFileName} 
                onChange={(e) => setNewFileName(e.target.value)} 
                placeholder="New file name" 
            />
            <button onClick={() => createFile('html')}>Create HTML File</button>
            <button onClick={() => createFile('css')}>Create CSS File</button>
            <button onClick={() => createFile('js')}>Create JavaScript File</button>

            <ul>
                {files.map(file => (
                    <li key={file.name}>
                        <span onClick={() => selectFile(file)}>{file.name}</span>
                        <button onClick={() => deleteFile(file.name)}>Delete</button>
                    </li>
                ))}
            </ul>

            {selectedFile && (
                <div>
                    <h3>Editing: {selectedFile.name}</h3>
                    <textarea 
                        value={selectedFile.content} 
                        onChange={(e) => updateFileContent(e.target.value)} 
                    />
                </div>
            )}
        </div>
    );
};

export default FileManager;