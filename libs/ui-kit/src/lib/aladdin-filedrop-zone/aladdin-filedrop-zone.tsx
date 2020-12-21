import './aladdin-filedrop-zone.scss';
import React, { useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import {
  MDBFormInline,
  MDBInput,
  MDBContainer,
  MDBTypography,
  MDBIcon,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import Draggable from 'react-draggable';

/* Custom File Drop Zone  */

// export interface IAladdinFiledropZoneProps
//   extends HTMLAttributes<HTMLDivElement> {
//   classes?: string;
//   isDragActive: boolean;
//   getRootProps?: () => void;
//   getInputProps?: () => void;
//   isDragReject?: boolean;
//   acceptedFiles?: boolean;
//   fileRejections?: () => void;
//   minSize?: number;
//   maxSize?: number;
//   multiple?: boolean;
// }
export const AladdinFiledropZone: React.FC = () => {
  const maxSize = 4000;

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: 'image/png',
    minSize: 0,
    maxSize,
  });

  // This is another component but concise example
  const fileList = (files: FileWithPath[]) =>
    files.map((file) => (
      <Draggable
        axis="both"
        handle=".draggable-handle-file"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      >
        <div className="d-flex">
          <div className="accepted-files draggable-handle-file" key={file.path}>
            {file.path} - {file.size} bytes
          </div>
          <div className=" m-2 close-files">X</div>
        </div>
      </Draggable>
    ));

  const isFileTooLarge = fileRejections.length > maxSize;
  return (
    <>
      <div className="file-dropzone-container text-center my-2">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {!isDragActive && (
            <>
              <MDBIcon
                className="mt-5 d-flex justify-content-center"
                icon="file-upload"
                size="3x"
              />
              <p className="mt-2">
                <strong>
                  Drag and Drop <span>Here</span>
                </strong>
              </p>
            </>
          )}
          {isDragActive && !isDragReject && "Drop it like it's hot!"}
          {isDragReject && (
            <MDBTypography
              className="py-2"
              note
              noteColor="danger"
              noteTitle="Note:"
            >
              File type is not accepted, please upload another file.
            </MDBTypography>
          )}
          {isFileTooLarge && (
            <MDBTypography
              className="py-2"
              note
              noteColor="danger"
              noteTitle="Note:"
            >
              Files is too large, please select another file size.
            </MDBTypography>
          )}
        </div>

        <div className="list-group mt-2">{fileList(acceptedFiles)}</div>
      </div>
      <p className="font-italic my-2 ">
        Allowed files formats: .fastq.gz, or fq.gz
      </p>
    </>
  );
};
