import '@/plugins/composition-api';
import { reactive } from '@vue/composition-api';

export const sharedUserMockData = [
  {
    userId: '66006b29-727e-4ed8-a3c8-95d4438f66d4',
    userName: 'naminami',
    nickname: '波平',
    themeColor: '#4caf50',
    hasAvatar: false,
    display: true,
  },
  {
    userId: '2ec8d984-aa5f-4f7e-b1a8-c9e478b54ffe',
    userName: 'fune',
    nickname: 'フネ',
    themeColor: '#ff9800',
    hasAvatar: false,
    display: true,
  },
  {
    userId: '58e4eb36-2be9-4448-b7f9-4603fd1fd026',
    userName: 'katuo',
    nickname: 'カツオ',
    themeColor: '#2196f3',
    hasAvatar: false,
    display: true,
  },
  {
    userId: '74ecde04-e90a-4b8a-ad3e-aa4dffac6127',
    userName: 'wakame',
    nickname: 'ワカメ',
    themeColor: '#e91e63',
    hasAvatar: false,
    display: true,
  },
];

export const sharedUserStore = reactive({ sharedUsers: sharedUserMockData });

/**
 * 特定ユーザーのプロフィールを更新します。
 * @param profile 更新対象ユーザーのプロフィール
 */
export const update = profile => {
  const filteredUser = sharedUserStore.sharedUsers.filter(
    user => user.userId === profile.userId,
  );

  if (!filteredUser || filteredUser.length === 0) {
    return;
  }

  const tagetUser = filteredUser[0];
  tagetUser.userName = profile.userName;
  tagetUser.nickname = profile.nickname;
  tagetUser.themeColor = profile.themeColor;
  tagetUser.hasAvatar = profile.hasAvatar;
};
