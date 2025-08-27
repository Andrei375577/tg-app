export type FileType = 'html' | 'css' | 'javascript';

export interface File {
    id: string;
    name: string;
    type: FileType;
    content: string;
}

export interface FileSystem {
    files: File[];
    createFile(name: string, type: FileType): File;
    deleteFile(id: string): void;
    updateFile(id: string, content: string): void;
    getFile(id: string): File | undefined;
}