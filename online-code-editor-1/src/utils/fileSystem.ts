import { useState } from 'react';

interface File {
    id: string;
    name: string;
    content: string;
    type: 'html' | 'css' | 'javascript';
}

class FileSystem {
    private files: File[] = [];

    createFile(name: string, type: 'html' | 'css' | 'javascript'): File {
        const newFile: File = {
            id: this.generateId(),
            name,
            content: '',
            type,
        };
        this.files.push(newFile);
        return newFile;
    }

    deleteFile(id: string): boolean {
        const index = this.files.findIndex(file => file.id === id);
        if (index !== -1) {
            this.files.splice(index, 1);
            return true;
        }
        return false;
    }

    editFile(id: string, content: string): boolean {
        const file = this.files.find(file => file.id === id);
        if (file) {
            file.content = content;
            return true;
        }
        return false;
    }

    getFileContent(id: string): string | undefined {
        const file = this.files.find(file => file.id === id);
        return file ? file.content : undefined;
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}

export const fileSystem = new FileSystem();