// components/table.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tableData: {
      type: Object,
      value: () => [],
    },
    columns: {
      type: Object,
      value: () => [],
    },
    titlePotion: {
      type: Number,
      value: 0,
    },
    tableWidth: {
      type: Number,
      value: 600,
    },
    // tbody
    tableHeight: {
      type: Number,
      value: 400,
    },
    tbodyBorder: {
      type: String,
      value: '',
    },
    rowBorder: {
      type: String,
      value: '',
    },
    tHeaderBorder: {
      type: String,
      value: '',
    },
    colmnBorder: {
      type: String,
      value: '',
    },
    headerHeight: {
      type: Number,
      value: 55,
    },
    show_Header: {
      type: Boolean,
      value: true,
    },
    // 斑马纹颜色
    stripe: {
      type: Object,
      value:  {
          stripeEven: '',
          stripeOdd: '#000000'
      }
    },
    lineHeight: {
      type: Number,
      value: 100
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    overlayShow: false,
    overLayInnertTop: null,
    switchMobile: null,
    wxCode: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //滚动方法
    scrollHandler(e) {
      let boost = this;
      let scrollTop = e.target.offsetTop / 400;
      boost.triggerEvent("parentComponentScroll", Math.ceil(e.target.offsetTop / 400));
    },
    // 切换用户
    switchHandler() {
      let that = this;
      console.log(
        that.data.switchMobile,
        "sadsadsadsasa",
        this.data.titlePotion
      );
      wx.login({

      });
      console.log(wx.getStorageSync("mobile", this.data.mobile));
    },
    // 点击行触发
    tableTapHandler(event) {
      console.log(
        event,
        "sadsa",
        event.currentTarget.dataset.mobile,
        this.data.titlePotion
      );
      this.setData({
        overlayShow: true,
        overLayInnertTop: event.detail.y,
        switchMobile: event.currentTarget.dataset.mobile,
      });
    },
    overlayHideHandler() {
      this.setData({
        overlayShow: false,
      });
    },
  },
});
