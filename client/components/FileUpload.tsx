import React from 'react'

interface FileUploadProps {
    file: any
    setFile: Function
}

const FileUpload: React.FC<FileUploadProps> = ({ file, setFile }) => {
    return (
        <div>
            <input type="file" />
        </div>
    )
}

export default FileUpload