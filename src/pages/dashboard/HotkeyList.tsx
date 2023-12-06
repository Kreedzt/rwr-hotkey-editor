import React, { FC, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HotkeyConfigCard from '../../components/hotkey/HotkeyConfigCard';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {
  createProfile,
  deleteProfile,
  getProfile,
  hotKeyConfig,
} from '../../store/config';
import HotkeyConfigList from '../../components/hotkey/HotkeyConfigList';
import { StoreServiceInst } from '../../services/store';
import { MessageServiceInst } from '../../services/message';
import { ShareServiceInst } from '../../services/share';
import { showGlobalDialog } from '../../store/dialog';

const HotkeyList: FC = () => {
  const navigate = useNavigate();
  const list = hotKeyConfig.value.hotkeys;

  const onActive = useCallback(async (id: string) => {
    console.log('onActive', id);
    const profile = getProfile(id);
    if (!profile) {
      return;
    }

    showGlobalDialog({
      title: '应用热键集配置',
      content: `确定应用${profile.title}配置到游戏配置吗? 该操作不可逆`,
      confirmText: '确认',
      cancelText: '取消',
      onConfirm: async () => {
        await StoreServiceInst.writeConfig2Game(profile);
        MessageServiceInst.success('写入成功!');
      },
    });
  }, []);

  const onEdit = useCallback(
    (id: string) => {
      navigate(`/dashboard/edit/${id}`);
    },
    [navigate]
  );

  const onDelete = useCallback(async (id: string) => {
    console.log('onDelete', id);
    const profile = getProfile(id);
    if (!profile) {
      return;
    }
    showGlobalDialog({
      title: '删除热键集',
      content: `确定删除${profile.title}吗? 删除的热键集无法找回`,
      confirmText: '删除',
      cancelText: '取消',
      onConfirm: async () => {
        await deleteProfile(id);
        MessageServiceInst.success('删除成功!');
      },
    });
  }, []);

  const onShare = useCallback(async (id: string) => {
    console.log('onShare', id);
    const profile = getProfile(id);
    if (!profile) {
      return;
    }

    await ShareServiceInst.share(profile);
    MessageServiceInst.success('已复制到剪贴板');
  }, []);

  const onReadShare = useCallback(async () => {
    const result = await ShareServiceInst.read();

    if (!result.isValid) {
      MessageServiceInst.error('读取失败, 配置不合法');
      return;
    }

    await createProfile(result.profile);
    MessageServiceInst.success('已成功读取配置');
  }, []);

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Link to="/dashboard/add">
          <Button>添加热键集</Button>
        </Link>

        <Button onClick={onReadShare} color="secondary">
          从剪贴板读取
        </Button>
      </Stack>
      <Grid container>
        <Grid item xs={12}>
          <HotkeyConfigList
            data={list}
            onActive={onActive}
            onEdit={onEdit}
            onDelete={onDelete}
            onShare={onShare}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HotkeyList;
