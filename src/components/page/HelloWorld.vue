<template>
  <div class="hello">
    <!-- 使用element24分栏，进行栅格布局，已达到可以自动缩放适配的目的 -->
    <el-row>
      <el-col :span="9" class="pos-order" id="order-list">
        <el-tabs v-model="acitveName" style="margin-left:10px">
          <el-tab-pane label="点单" name='first'>
            <el-table :data="orderTableList" stripe border fit style="width:100%;" align="center">
              <el-table-column prop="goods" label="商品" align="center"></el-table-column>
              <el-table-column prop="count" label="数量" align="center"></el-table-column>
              <el-table-column prop="money" label="金额" align="center"></el-table-column>
              <el-table-column label="操作" align="center" fixed="right">
                <template slot-scope="scope">
                        <el-button size="mini" type="text">删除</el-button>
                        <el-button size="mini" type="text">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top:15px">
            <el-button size="mini" type="primary">结账</el-button>
            <el-button size="mini" type="danger">清空</el-button>
            </div>

          </el-tab-pane>
          <el-tab-pane label="挂单" name='second'>挂单</el-tab-pane>
          <el-tab-pane label="外卖" name='third'>外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="15">
        <div class="often-goods">
          <div class="title">热销食品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="item in oftenGoodsList">
                <span>{{item.goodsName}}</span><span class="price">￥{{item.price}}元</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 所有商品列表 -->
        <div class="goods-all-list">
          <div class="title">所有商品</div>
          <div>
            <el-tabs v-model="goodsActiveName" style="margin-left:15px">
              <el-tab-pane label="主食" name="first">
                <div>
                  <ul>
                    <li>
                      <i class="iconfont icon-hanbao"></i><span>香辣鸡腿堡</span><span>￥16元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食" name="second">小食</el-tab-pane>
              <el-tab-pane label="饮料" name="third">饮料</el-tab-pane>
              <el-tab-pane label="套餐" name="fouth">套餐</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data: function() {
      return {
        acitveName: "first",
        goodsActiveName:"first",
        orderTableList: [{
            goods: "香辣鸡腿堡",
            count: 1,
            money: "18元"
          },
          {
            goods: "大杯可乐",
            count: 2,
            money: "10元"
          },
          {
            goods: "大份薯条",
            count: 3,
            money: "12元"
          }
        ],
        oftenGoodsList: [{
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: "16"
        },{
          goodsId: 2,
          goodsName: "香辣鸡翅",
          price: "8"
        },{
          goodsId: 3,
          goodsName: "大份薯条",
          price: "9"
        },{
          goodsId: 4,
          goodsName: "鸡米花",
          price: "10"
        },{
          goodsId: 5,
          goodsName: "中杯可口可乐",
          price: "6"
        }]
      };
    },
    methods: {
      handleClick: function(tab, event) {}
    },
    mounted() {
      var orderHeight = document.body.clientWidth;
      document.getElementById("order-list").style.height = orderHeight + "px";
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello {
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  .pos-order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
  }
  .title {
    height: 20px;
    background-color: #f9fafc;
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #d3dce6;
  }
  .often-goods-list ul li {
    list-style: none;
    float: left;
    padding: 10px;
    margin: 10px;
    border: 1px solid #d3dce6;
    background-color: aliceblue;
    border-radius: 5px;
  }
  .price {
    color: #42b983;
  }
  .goods-all-list{
    clear: both;
  }
  .goods-all-list ul li{
    list-style: none;
    padding: 10px;
    margin: 10px;
    float: left;
    border: 1px solid #d3dce6;
    background-color: aliceblue;
    border-radius: 5px;
  }
</style>
