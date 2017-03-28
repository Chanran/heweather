import axios from 'axios'

const host = 'https://free-api.heweather.com/v5'
const key = '5dafd138ca9841938affbd41798d1cbb'

/* 和风天气api */

/**
 * 获取全部天气数据
 * @param {func} callback 回调函数
 * @param {string} city 城市名
 */
function getAllData (callback, city) {
  axios.get(host + '/weather', {
    params: {
      city,
      key
    }
  })
  .then((response) => {
    let data = response.data
    let allData = data.HeWeather5[0]
    callback(allData)
  })
  .catch((error) => {
    console.log(error)
  })
}

/**
 * 获取三天内的天气预报
 * @param {func} callback 回调函数
 * @param {string} city 城市名
 */
function getForecastData (callback, city) {
  axios.get(host + '/forecast', {
    params: {
      city,
      key
    }
  })
  .then((response) => {
    let data = response.data
    let forecast = data.HeWeather5[0].daily_forecast
    callback(forecast)
  })
  .catch((error) => {
    console.log(error)
  })
}

/**
 * 获取每小时的天气数据
 * @param {func} callback 回调函数
 * @param {string} city 城市名
 */
function getHourlyData (callback, city) {
  axios.get(host + '/hourly', {
    params: {
      city,
      key
    }
  })
  .then((response) => {
    let data = response.data
    let hourly = data.HeWeather5[0].hourly_forecast
    callback(hourly)
  })
  .catch((error) => {
    console.log(error)
  })
}

/**
 * 获取实时天气数据
 * @param {func} callback 回调函数
 * @param {string} city 城市名
 */
function getNowData (callback, city) {
  axios.get(host + '/now', {
    params: {
      city,
      key
    }
  })
  .then((response) => {
    let data = response.data
    let now = data.HeWeather5[0].now
    callback(now)
  })
  .catch((error) => {
    console.log(error)
  })
}

/**
 * 获取生活指数数据
 * @param {func} callback 回调函数
 * @param {string} city 城市名
 */
function getSuggestionData (callback, city) {
  axios.get(host + '/suggestion', {
    params: {
      city,
      key
    }
  })
  .then((response) => {
    let data = response.data
    let suggestion = data.HeWeather5[0].suggestion
    callback(suggestion)
  })
  .catch((error) => {
    console.log(error)
  })
}

export default {
  getAllData,
  getForecastData,
  getHourlyData,
  getNowData,
  getSuggestionData
}
