const util = require('../../utils/util.js')
const api = require('../../config/api.js')

Page({

  data:
  {
    OwnerShipsTypeList: [{ Id: 26, Name: "Yes" }, { Id: 27, Name: "No" }],
    CompanyTypeList: [],
    regionType: 1,
    regionList: [],
    selectRegionDone: false,
    arrow_down: "/static/images/arrow_down.png",
    address_right: "/static/images/address_right.png",
    blOpenOwnerShip: false,
    blOpenCompanyType: false,
    selectedOpenOwnerShipId: 0,
    selectedOpenOwnerShipName: '公司性质(必选)',

  },


























  /*绿色区域确认 */
  onClickOwnerShipsTypeListSelect: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    var selectedId = e.currentTarget.dataset.key;
    var selectedName = e.currentTarget.dataset.name;
    this.setData({
      blOpenOwnerShip: false,
      blOpenCompanyType: false,
      selectedOpenOwnerShipId: selectedId,
      selectedOpenOwnerShipName: selectedName
    })
  },

  /* 打开绿色区域*/
  openOwnerShipSelect: function (e) {
    if (this.data.blOpenOwnerShip) {
      this.setData({
        blOpenOwnerShip: false,
      });
    }
    else {
      this.setData({
        blOpenOwnerShip: true,
      });
    }
  },

   /*获取数据*/getRegisterData() {
    let that = this;
    let regionType = that.data.regionType;



    that.setData({
      OwnerShipsTypeList: that.data.OwnerShipsTypeList

    })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getRegisterData();

  },
})