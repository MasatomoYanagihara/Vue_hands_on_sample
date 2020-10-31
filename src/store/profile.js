// component外でreactive()を使用する為にimport
import '@/plugins/composition-api';
import { reactive } from '@vue/composition-api';
import { update } from '@/store/shared-user';
import axios from 'axios';

export const profileStore = reactive({ profile: null });

/**
 * ユーザー名を更新します。
 * @param userName ユーザー名
 */
export const updateUserNameAsync = async userName => {
  const profile = profileStore.profile;
  const data = { userName: userName };

  // eslint-disable-next-line no-useless-catch
  try {
    await axios.patch('profile', data);
    profile.userName = userName;
    update(profile);
  } catch (error) {
    throw error;
  }
};

/**
 * ニックネームを更新します。
 * @param nickname ニックネーム
 */
export const updateNickname = nickname => {
  profileStore.profile.nickname = nickname;
  update(profileStore.profile);
};

/**
 * テーマカラーを更新します。
 * @param themeColor テーマカラー
 */
export const updateThemeColor = themeColor => {
  profileStore.profile.themeColor = themeColor;
  update(profileStore.profile);
};

// /**
//  * サインインします。
//  */
// export const signInAsync = async () => {
//   // ここに外部認証に関連した実装が必要

//   // eslint-disable-next-line no-useless-catch
//   try {
//     const response = await axios.get('profile');
//     profileStore.profile = response.data;
//   } catch (error) {
//     throw error;
//   }
// };

/**
 * サインインします。（Fetch APIバージョン）
 */
export const signInAsync = async () => {
  // ここに外部認証に関連した実装が必要

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch('/api/profile', options);
    if (response.ok) {
      profileStore.profile = await response.json();
      return;
    }
    throw new Error('response was not ok.');
  } catch (error) {
    throw error;
  }
};
