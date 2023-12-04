import React, { FC, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HotkeyConfigCard from '../../components/hotkey/HotkeyConfigCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { deleteProfile, hotKeyConfig } from '../../store/config';
import HotkeyConfigList from '../../components/hotkey/HotkeyConfigList';

const HotkeyList: FC = () => {
  const navigate = useNavigate();
  const list = hotKeyConfig.value.hotkeys;

  const onActive = useCallback((id: string) => {
    //
  }, []);

  const onEdit = useCallback((id: string) => {
    navigate(`/dashboard/edit/${id}`);
  }, [navigate]);

  const onDelete = useCallback(async (id: string) => {
    console.log('onDelete', id);
    await deleteProfile(id);
  }, []);

  return (
    <div>
      <Grid item xs={12}>
        <Link to="/dashboard/add">
          <Button>添加热键集</Button>
        </Link>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <HotkeyConfigList
            data={list}
            onActive={onActive}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HotkeyList;
