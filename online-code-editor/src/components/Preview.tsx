import React from 'react';

interface PreviewProps {
    code: string;
}

const Preview: React.FC<PreviewProps> = ({ code }) => {
    return (
        <div>
            <h2>Preview</h2>
            <iframe
                title="Code Preview"
                srcDoc={code}
                style={{ width: '100%', height: '500px', border: 'none' }}
            />
        </div>
    );
};

export default Preview;