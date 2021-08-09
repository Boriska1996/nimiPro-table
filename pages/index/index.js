// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') ,// 如需尝试获取用户信息可改为false,
    coloms:[
      {
        key:'name',
        title:'姓名',
        width:100,
        height:200,
        background:"royalblue"
      },
      {
        key:'age',
        title:"年龄",
        width:100,
        height:200,
      },
      {
        key:'time',
        title:"时间",
        width:100,
        height:200,
      },
      {
        key:'show',
        title:"展示",
        width:100,
        height:200,
      },
      {
        key:'test',
        title:"测试",
        width:100,
        height:200,
      },
      {
        key:'position',
        title:"地点",
        width:100,
        height:200,
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
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
