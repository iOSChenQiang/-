Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        title: "标题1",
        work: "0",
        name: "内容1",
        other: "其他1",
        // open: false
      },
      {
        title: "标题2",
        work: "1",
        name: "内容2",
        other: "其他2",
        // open: false,
        detail: [
          {
            detailType: "类型1"
          },
          {
            detailType: "类型2"
          },
          {

            detailType: "类型3"
          },
          {

            detailType: "类型4"
          }
        ]
      },
      {
        title: "标题3",
        work: "1",
        name: "内容3",
        other: "其他3",
        // open: false,
        detail: [
          {
            detailType: "类型1"
          },
          {
            detailType: "类型2"
          },
          {

            detailType: "类型3"
          },
          {

            detailType: "类型4"
          }
        ]
      }
    ]
  },


 
  kindToggle(e) {
    const title = e.currentTarget.id
    const mylist = this.data.list
    for (let i = 0, len = mylist.length; i < len; ++i) {
  
      if (mylist[i].title === title) {
          mylist[i].open = !mylist[i].open
        } else {
          mylist[i].open = false
        }
      
    }

    this.setData({
      list: mylist
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})