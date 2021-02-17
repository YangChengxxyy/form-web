import request from '@/utils/request'
import router from '@/router'

export function login(data) {
  return request.get('/api/login', {
    params: data
  })
}

export function getInfo(token) {
  const { id, password, workcell_id } = token
  return request.get('/api/login_check', {
    params: {
      id: id,
      password: password,
      workcell_id: workcell_id
    }
  })
}

export function logout() {
  router.push({ path: '/login' })
}
