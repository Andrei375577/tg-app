import React, { useState } from 'react';

const Editor = ({ fileContent, onSave }) => {
    const [content, setContent] = useState(fileContent);

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    const handleSave = () => {
        onSave(content);
    };

    return (
        <div>
            <textarea
                value={content}
                onChange={handleChange}
                rows={20}
                cols={80}
                placeholder="Edit your code here..."
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default Editor;