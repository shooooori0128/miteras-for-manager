import { useEffect, useState } from 'react';

import { Button, Grid, TextField, Typography } from '@mui/material';
import './App.css';

function App() {
  const [projectNames, setProjectNames] = useState<string[]>([]);

  const addTextField = () => {
    setProjectNames((prevNames) => [...prevNames, '']);
  };

  const changeTextField = (index: number, value: string) => {
    setProjectNames((prevNames) => {
      const newNames = [...prevNames];
      newNames[index] = value;

      return newNames;
    });
  };

  const saveProjectName = () => {
    chrome.storage.sync.set({ projectNames: projectNames });
  };

  const removeTextField = (index: number) => {
    setProjectNames((prevNames) => {
      const newNames = [...prevNames];
      newNames.splice(index, 1);

      return newNames;
    });
  };

  useEffect(() => {
    chrome.storage.sync.get('projectNames', (data) => {
      const names = data.projectNames;
      if (names) {
        setProjectNames(names);
      }
    });
  }, []);

  return (
    <Grid
      alignItems="flex-start"
      container
      flexDirection="column"
      gap={2}
    >
      <Typography variant="h3">除外対象プロジェクト名一覧</Typography>
      <Typography variant="body1">
        MiTERASでハイライトさせたくないプロジェクトコード一覧を入力してください。1文字でも間違っていると正常に動作しません。
      </Typography>
      <Button
        onClick={addTextField}
        variant="contained"
      >
        入力欄を追加する
      </Button>

      {projectNames.map((projectName, index) => (
        <Grid
          container
          gap={2}
          key={index}
        >
          <TextField
            onChange={(event) => changeTextField(index, event.target.value)}
            size="small"
            style={{ width: '600px' }}
            value={projectName}
            variant="outlined"
          />
          <Button
            onClick={() => removeTextField(index)}
            variant="contained"
          >
            削除
          </Button>
        </Grid>
      ))}

      <Button
        onClick={saveProjectName}
        variant="contained"
      >
        入力中のプロジェクト名一覧を保存する
      </Button>
    </Grid>
  );
}

export default App;
