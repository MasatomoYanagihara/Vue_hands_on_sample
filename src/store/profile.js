// component外でreactive()を使用する為にimport
import '@/plugins/composition-api';
import { reactive } from '@vue/composition-api';

export const profileMockData = {
  userId: '66006b29-727e-4ed8-a3c8-95d4438f66d4',
  userName: 'naminami',
  nickname: '波平',
  themeColor: '#4caf50',
  hasAvatar: false,
  mailAddress: 'namihei@example.com',
};

export const profileStore = reactive({ profile: null });
