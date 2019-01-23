// components/goodslist/goodslist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    allgoods: Array,
    goodstype: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    filtergoods: []
  },
  attached() {
    var filtergoods = this.properties.allgoods.filter((goods) => goods.type.text == this.properties.goodstype)
    this.setData({
      filtergoods: filtergoods
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})