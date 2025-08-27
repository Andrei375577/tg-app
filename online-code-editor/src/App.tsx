import React, { useState } from 'react';
import FileManager from './components/FileManager';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { FileType } from './types';

const App: React.FC = () => {
    const [files, setFiles] = useState<FileType[]>([]);
    const [activeFile, setActiveFile] = useState<FileType | null>(null);

    const createFile = (name: string, type: 'html' | 'css' | 'js') => {
        const newFile = { name, type, content: '' };
        setFiles([...files, newFile]);
        setActiveFile(newFile);
    };

    const deleteFile = (fileToDelete: FileType) => {
        setFiles(files.filter(file => file !== fileToDelete));
        if (activeFile === fileToDelete) {
            setActiveFile(null);
        }
    };

    const updateFileContent = (content: string) => {
        if (activeFile) {
            const updatedFile = { ...activeFile, content };
            setFiles(files.map(file => (file === activeFile ? updatedFile : file)));
            setActiveFile(updatedFile);
        }
    };

    return (
        <div>
            <FileManager files={files} onCreate={createFile} onDelete={deleteFile} onSelect={setActiveFile} />
            <Editor file={activeFile} onUpdate={updateFileContent} />
            <Preview content={activeFile?.content} />
        </div>
    );
};

export default App;