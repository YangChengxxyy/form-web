import request from '@/utils/request'

export function login(data) {
  return request.get('/api/login', {
    params: data
  })
}
