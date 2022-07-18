import React from "react";
import { useDispatch } from "react-redux";
import { gameStateActions } from "../../ducks/game";
import { applicationActions, ApplicationScreen } from "../../ducks/application";

export const FileLoader = () => {
  const dispatch = useDispatch();

  const onChange = (files: FileList | null) => {
    if (files) {
      const file = files[0];

      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          dispatch(gameStateActions.load(JSON.parse(result as string)));
          dispatch(applicationActions.setScreen(ApplicationScreen.GAME));
        }
      };
    }
  };

  return (
    <input type="file" onChange={(event) => onChange(event.target.files)} />
  );
};
