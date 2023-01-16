import React from 'react'

interface FileUploadProps {
    setFile: Function
    accept: string
    children: any
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
    const ref = React.useRef<HTMLInputElement>()

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files)
    }

    return (
        <div onClick={() => ref.current?.click()}>
            <input type="file"
                accept={accept}
                style={{ display: 'none' }}
                ref={ref}
                onChange={onChangeInput}
            />
            {children}
        </div>
    )
}

export default FileUpload