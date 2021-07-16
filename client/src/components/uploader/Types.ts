export interface UploaderProps {
  label: string;
  accept: string;
  btnClass?: string;
  // unit should be byte
  maxSize?: number;
  // snackbar warning when uploaded file size is over limit
  overSizeWarning?: string;
  setFileName: (fileName: string) => void;
  // handle uploader uploaded
  handleUploadedData: (data: string, uploader: HTMLFormElement) => void;
  // handle uploader onchange
  handleUploadFileChange?: (file: File, uploader: HTMLFormElement) => void;
  handleUploadError?: () => void;
}
