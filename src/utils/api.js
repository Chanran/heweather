export function checkData (response) {
  switch (response.status) {
    case 'ok':
      return {isOk: true, msg: '数据正常'}
    case 'invalid key':
      return {isOk: false, msg: '错误的key'}
    case 'unknown city':
      return {isOk: false, msg: '未知或错误城市'}
    case 'no more request':
      return {isOk: false, msg: '超过访问次数'}
    case 'param invalid':
      return {isOk: false, msg: '参数错误'}
    case 'vip over':
      return {isOk: false, msg: '付费账号过期'}
    case 'anr':
      return {isOk: false, msg: '无响应或超时'}
    case 'permission denied':
      return {isOk: false, msg: '无访问权限，如免费key强制获取付费数据或获取未购买的付费数据'}
    default:
      return {isOk: false, msg: '出现未知错误，开始怀疑人生'}
  }
}
