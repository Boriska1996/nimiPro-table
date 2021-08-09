// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    coloms:[
      {
        key:'name',
        title:'姓名',
        width:50
      },
      {
        key:'age',
        title:"年龄",
        width:50
      },
      {
        key:'time',
        title:"时间",
        width:50
      },
      {
        key:'show',
        title:"展示",
        width:50
      },
      {
        key:'test',
        title:"测试",
        width:50
      },
      {
        key:'position',
        title:"地点",
        width:50
      },
    ],
    data:[
      {
        name:'Ajax',
        age:20,
        time:2020,
        position:'s',
        test:"s2sad",
        show:"sada"
      },
      {
        name:'Ajax',
        age:20,
        time:2020,
        position:'s',
        test:"s2sad",
        show:"sada"

      },
      {
        name:'Ajax',
        age:20,
        time:2020,
        position:'s',
        test:"s2sad",
        show:"sada"
        
      },
      {
        name:'Ajax',
        age:20,
        time:2020,
        position:'s',
        test:"s2sad",
        show:"sada"
        
      },
      {
        name:'Ajax',
        age:20,
        time:2020,
        position:'s',
        test:"s2sad",
        show:"sada"
        
      },
      {
        name:'Ajax',
        age:20,
        time:2020,
        position:'s',
        test:"s2sad",
        show:"sada"
        
      }
    ],
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
