"use client"

import { useEffect, useState } from "react"
import { useLocalStorage } from "@uidotdev/usehooks"
import Dropzone from "react-dropzone"
import { Document, Page, pdfjs } from "react-pdf"

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import { Icons } from "../icons"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export default function MyDropzone() {
  // const [pdfUrl, savePdfUrl] = useLocalStorage<string | null>("pdfUrl", null)
  const [file, setFile] = useState<File | null>(null)
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  if (!file) {
    return (
      <div>
        <Dropzone
          multiple={false}
          onDrop={(acceptedFiles) => {
            // const fileUrl = URL.createObjectURL(acceptedFiles[0])
            setFile(acceptedFiles[0])
          }}
        >
          {({ getRootProps, isDragAccept }) => (
            <div
              className="flex h-64 max-w-xl cursor-pointer items-center justify-center rounded-2xl border-[3px] border-dashed p-8 hover:bg-muted/20"
              {...getRootProps()}
            >
              <label htmlFor="dropzone-file">
                <div className="m-auto flex flex-col items-center justify-center">
                  <Icons.cloud className="h-12 w-12" />
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Drop PDF here.
                  </p>
                </div>
              </label>
            </div>
          )}
        </Dropzone>
      </div>
    )
  }
  return (
    <div>
      <h2>the pdf</h2>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}
