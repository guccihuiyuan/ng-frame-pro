/**
 * 数据字典子项
 */
export interface IDataDictItem {
  /**
   * 编码
   */
  CODE: string | number;
  /**
   * 说明
   */
  DESC: string;
  /**
   * 额外说明-一般用于其他解释
   */
  EXTRA_DESC?: string;
}

/**
 * 数据字典，都实现该接口
 */
export interface IDataDict {
  [key: string]: IDataDictItem;
}

/**
 * 将字典对象转换成数组
 * @param dataDict 字典类型
 */
export function GET_ARRAR_FROM_DICT(dataDict: object): IDataDictItem[] {
  const arr = [];

  // 获取所有key
  const dictKeys = Object.keys(dataDict);

  dictKeys.forEach((key) => {
    arr.push(dataDict[key]);
  });

  return arr;
}

/**
 * 获取对应类型和值的描述
 * @param dataDict 字典类型
 * @param code     值
 */
export function GET_DESC_FROM_DICT(dataDict: object, code: string | number): string {
  if (code !== 0 && !code) {
    return '';
  }

  // 获取所有key
  const dictKeys = Object.keys(dataDict);

  let desc = '';

  dictKeys.forEach(key => {
    const dataDictItem: IDataDictItem = dataDict[key];
    if ((dataDictItem.CODE).toString() === code.toString()) {
      desc = dataDictItem.DESC;
    }
  });

  return desc;
}
