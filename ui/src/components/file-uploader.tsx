import { ArrowDownToLine, CircleX } from 'lucide-react'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from './button'

export const FileUploader = ({
  onChange,
}: {
  onChange: (file: File) => void
}) => {
  const [files, setFiles] = useState<{ file: File; preview: string }[]>([])

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      setFiles([{ file, preview: URL.createObjectURL(file) }])
      onChange(file)
    },
  })

  return (
    <section className="border-primary/25 flex size-full max-h-full flex-col items-center justify-center gap-4 rounded-lg border border-dashed bg-white p-6">
      {files.length === 0 ? (
        <div
          {...getRootProps({
            className: 'flex flex-col gap-4 items-center justify-center',
          })}
        >
          <input {...getInputProps()} />
          <div className="flex aspect-square size-12 items-center justify-center rounded-full border">
            <ArrowDownToLine className="text-primary/50 size-6" />
          </div>
          <p>Drag n drop some files here, or click to select files</p>
        </div>
      ) : (
        <div className="size-full">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex h-full items-center justify-between"
            >
              <div className="h-full w-auto overflow-hidden rounded-md">
                <img
                  src={file.preview}
                  // Revoke data uri after image is loaded
                  className="h-full w-auto object-cover"
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview)
                  }}
                />
              </div>
              <Button onClick={() => setFiles([])} variant="ghost">
                <CircleX />
              </Button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
