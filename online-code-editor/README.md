# Online Code Editor

This project is an online code editor that allows users to create, delete, and edit HTML, CSS, and JavaScript files. It features a file manager for easy navigation and management of files, as well as a code editor and a live preview of the code.

## Project Structure

```
online-code-editor
├── public
│   ├── index.html          # Main HTML page that loads scripts and styles
│   └── favicon.ico         # Site icon displayed in the browser tab
├── src
│   ├── components
│   │   ├── FileManager.tsx  # Component for managing files
│   │   ├── Editor.tsx       # Component for editing file content
│   │   └── Preview.tsx      # Component for previewing HTML code
│   ├── utils
│   │   └── fileSystem.ts    # Utilities for file system operations
│   ├── App.tsx              # Main application component
│   └── types
│       └── index.ts         # Types and interfaces used in the application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Features

- Create, delete, and edit HTML, CSS, and JavaScript files.
- File manager for easy file navigation and management.
- Code editor with syntax highlighting and editing capabilities.
- Live preview of HTML code.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd online-code-editor
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```
Open your browser and navigate to `http://localhost:3000` to access the online code editor.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.