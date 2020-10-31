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
export const updateUserName = userName => {
  profileStore.profile.userName = userName;
  update(profileStore.profile);
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

/**
 * サインインします。
 */
export const signInAsync = async () => {
  // ここに外部認証に関連した実装が必要

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get('profile');
    profileStore.profile = response.data;
  } catch (error) {
    throw error;
  }
};
