/*
 * 将和风天气的城市json文件转化成只有城市名称的json文件
 */

const fs = require('fs')

const dataArr = require('../src/assets/china-city-list.json')

let cityArr = dataArr.map((cityData) => {
  return cityData.cityZh
})

fs.writeFile('../src/assets/citys.json', JSON.stringify(cityArr), 'utf8', (err) => {
  console.log(err)
})
