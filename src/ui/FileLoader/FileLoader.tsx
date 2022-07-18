import React, { FC } from "react";

type FileLoaderProps = {
  onFileLoaded: (content: any) => void;
};

export const FileLoader: FC<FileLoaderProps> = ({ onFileLoaded }) => {
  const onChange = (files: FileList | null) => {
    if (files) {
      const file = files[0];

      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          onFileLoaded(JSON.parse(result as string));
        }
      };
    }
  };

  return (
    <input type="file" onChange={(event) => onChange(event.target.files)} />
  );
};
