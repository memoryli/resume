import qs from 'qs'
import jsonp from 'jsonp'
import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.error('错误的传参')
  return Promise.reject(error)
})
// 执行 POST 请求
function httpPost (opt) {
  return new Promise((resolve, reject) => {
    axios.post(baseApiUrl + opt.url, opt.params)
      .then(response => {
        if (response.success) { // 请求成功
          resolve(response)
        } else if (!response.sucess) { // 请求服务端错误
          console.error('请求失败！', response)
          reject(response)
        }
      }, err => {
        console.error('请求失败！', err)
        reject(null, err)
      })
      .catch((err) => {
        console.error('请求失败！', err)
        reject(null, err)
      })
  })
}

// 执行 GET 请求
function httpGet (opt) {
  return new Promise((resolve, reject) => {
    axios.get(baseApiUrl + opt.url, {params: opt.params})
      .then(function (response) {
        if (response.data.success) { // 请求成功
          // console.log(response.data)
          resolve(response.data)
        } else { // 请求服务端错误
          console.error('请求失败！', response)
          reject(response)
        }
      }, err => {
        console.error('请求失败！', err)
        reject(null, err)
      })
      .catch(function (err) {
        console.error('请求失败！', err)
        reject(null, err)
      })
  })
}

// 执行 JSONP 请求
function httpJsonp (opt) {
  return new Promise((resolve, reject) => {
    let q = qs.stringify(opt.params)
    let apiUrl = baseApiUrl + opt.url + '?' + q
    jsonp(apiUrl, null, function (err, data) {
      if (err) {
        console.error('请求失败！', err)
        reject(err)
      } else {
        if (data.success) { // 请求成功
          resolve(data)
        } else if (!data.success) { // 请求服务端错误
          console.error('请求失败！', data)
          reject(data)
        }
        resolve(data)
      }
    })
  })
}
export default {
  httpPost,
  httpGet,
  httpJsonp
}
