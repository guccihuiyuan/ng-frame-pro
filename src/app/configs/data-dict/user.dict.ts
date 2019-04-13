import { IDataDictItem } from './index';

/**
 * 用户状态
 */
interface IUserStateDict {
  ENABLE: IDataDictItem;
  DISABLE: IDataDictItem;
}
export const USER_STATE_DICT: IUserStateDict = {
  ENABLE: {
    CODE: 0,
    DESC: '正常'
  },
  DISABLE: {
    CODE: 1,
    DESC: '冻结'
  }
};
