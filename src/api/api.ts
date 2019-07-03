import request from '@/utils/request'
/**
 * 注册
 * @param email 邮箱地址
 * @param password 密码
 */
export function registry(email: string, username: String, password: string) {
  return request({
    url: '/registry',
    method: 'POST',
    data: {
      email,
      username,
      password
    }
  })
}

/**
 * 登录
 * @param email 邮箱
 * @param password 密码
 */
export function login(email: string, password: string) {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      email,
      password
    }
  })
}

/**
 * 获取todo的数据
 */
export function getTodo() {
  return request({
    url: '/todo',
    method: 'GET'
  })
}

/**
 * 添加todo的数据
 * @param data
 */
export function setTodo(data: object) {
  return request({
    url: '/getTodo',
    method: 'POST',
    data
  })
}


/**
 * 完成todo事件
 * @param id 
 */
export function carryOutTodo(id:string) {
  return request({
    url: '/carryOutTodo',
    method: 'POST',
    data: {
      id
    }
  })
}