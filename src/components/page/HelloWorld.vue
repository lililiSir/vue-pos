<template>
  <div class="hello">
    <!-- 使用element24分栏，进行栅格布局，已达到可以自动缩放适配的目的 -->
    <el-row>
      <el-col :span="9" class="pos-order" id="order-list">
        <el-tabs v-model="acitveName" style="margin-left:10px">
          <el-tab-pane label="点单" name='first'>
            <el-table :data="orderTableList" stripe border fit style="width:100%;" align="center">
              <el-table-column prop="goodsName" label="商品" align="center"></el-table-column>
              <el-table-column prop="count" label="数量" align="center"></el-table-column>
              <el-table-column prop="price" label="金额" align="center"></el-table-column>
              <el-table-column label="操作" align="center" fixed="right">
                <template slot-scope="scope">
                  <el-button size="mini" type="text" @click="reduceCount(scope.row)">删除</el-button>
                  <el-button size="mini" type="text" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv" style="text-align:left">
              <div>
                <span>数量：{{totalCount}} 件 &nbsp;&nbsp;&nbsp; 金额：{{totalMoney}} 元</span>
              </div>
            </div>
            <div style="margin-top:10px">
              <el-button size="mini" type="primary" @click="accounts">结账</el-button>
              <el-button size="mini" type="danger" @click="clearOrderList">清空</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" name='second'>挂单</el-tab-pane>
          <el-tab-pane label="外卖" name='third'>外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="15">
        <div class="often-goods">
           <div class="title">常用商品</div>
           <div class="often-goods-list">
              <ul>
                <li v-for="item in oftenGoodsList" @click="addOrderList(item)">
                  <span>{{item.goodsName}}</span><span class="price">￥{{item.price}}元</span>
                </li>
              </ul>
           </div>
        </div>
        <div class="all-goods">
          <div class="title">所有商品</div>
          <div class="all-goods-list">
            <el-tabs v-model="goodsTabName" style="margin-left:10px">
                <el-tab-pane label="主食" name="first">
                  <div class="staplefood">
                    <ul>
                      <li v-for="item in staplefood">                    
                        <span class="foodImg"><img :src='item.goodsUrl' width="64" height="64"/></span>
                        <span class="foodName">{{item.goodsName}}</span>
                        <span class="foodPrice" style="">￥{{item.goodsPrice}}元</span>
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
  import axios from 'axios';
  import store from '@/vuex/store';
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: "HelloWorld",
    data: function() {
      return {
        acitveName: "first",
        goodsTabName: "first",
        totalCount: 0,
        totalMoney: 0,
        orderTableList: [],
        oftenGoodsList: [{
            goodsId: 1,
            goodsName: "香辣鸡腿堡",
            price: "16"
          },
          {
            goodsId: 2,
            goodsName: "大杯可乐",
            price: "10"
          },
          {
            goodsId: 3,
            goodsName: "大份薯条",
            price: "12"
          },
          {
            goodsId: 4,
            goodsName: "香辣鸡翅",
            price: "8"
          },
          {
            goodsId: 5,
            goodsName: "鸡米花",
            price: "11"
          },
          {
            goodsId: 6,
            goodsName: "香辣鸡块",
            price: "11"
          },
          {
            goodsId: 7,
            goodsName: "草莓圣代",
            price: "6"
          }
        ],
        staplefood: [],
      };
    },
    methods: {
      addOrderList(goods) {
        // 首先判断该商品是否存在于列表中，如果存在，则数量加1，价格加上单价
        this.totalCount = 0;
        this.totalMoney = 0;
        let isHave = false;
        for (let i = 0; i < this.orderTableList.length; i++) {
          if (this.orderTableList[i].goodsName == goods.goodsName) {
            isHave = true;
            break;
          }
        }
        //如果不存在，则直接加入到列表中
        if (isHave) {
          //过滤出ID相同的
          let arr = this.orderTableList.filter(object => object.goodsName == goods.goodsName);
          arr[0].count++;
        } else {
          //构造一个新的对象，然后插入到数组当中
          let newObject = {
            goodsName: goods.goodsName,
            count: 1,
            price: goods.price
          };
          this.orderTableList.push(newObject);
        }
        this.orderTableList.forEach(object => {
          this.totalCount += object.count;
          this.totalMoney = this.totalMoney + (object.count * object.price);
        });
      },
      clearOrderList: function() {
        this.totalCount = 0;
        this.totalMoney = 0;
        this.orderTableList = [];
      },
      reduceCount(goods) {
        this.totalCount = 0;
        this.totalMoney = 0;
        if (goods.count == 1) {
          //从列表中移除该商品
          for (let i = 0; i < this.orderTableList.length; i++) {
            if (this.orderTableList[i].goodsName == goods.goodsName) {
              this.orderTableList.splice(i, 1);
              break;
            }
          }
        } else {
          goods.count--;
        }
        this.orderTableList.forEach(object => {
          this.totalCount += object.count;
          this.totalMoney = this.totalMoney + (object.count * object.price);
        });
      },
      accounts() {
        if (this.totalCount != 0) {
          //结账
          this.$notify({
            title: "付款成功",
            message: "您已成功支付" + this.totalMoney + "元",
            type: "success",
            position: 'bottom-right',
            offset: 50
          });

          //调用vuex进行简单存储，存储之前，先对对象进行改编
          //提取当前时间
          let date=new Date();
          let currentTime=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay()+" "+date.getHours()+":"+date.getMinutes();

          let accountObject={date:currentTime,count:this.totalCount,money:this.totalMoney};
          
          this.$store.commit('addAccounts',accountObject);

          this.clearOrderList();
        }
      }
    },
    created() {
      axios.get("https://easy-mock.com/mock/5a7abdc0a3186d0d260d792d/example/getGoodsList").then(response => {
        console.info(response.data.data.goods);
        this.staplefood = response.data.data.goods;
      }).catch(function(error) {
        console.error(error)
      });
    },
    mounted() {
      var orderHeight = document.body.clientWidth;
      document.getElementById("order-list").style.height = orderHeight + "px";
    },
    store
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
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
  .often-goods .title {
    height: 20px;
    font-size: 16px;
    text-align: left;
    padding: 10px;
    margin: 0px;
    border-bottom: 1px solid #c0ccda;
  }
  .often-goods .often-goods-list ul li {
    list-style: none;
    display: block;
    float: left;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background-color: #42b983;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
  }
  .often-goods .often-goods-list ul li .price {
    color: brown;
  }
  .all-goods {
    margin-top: 150px;
    clear: both;
  }
  .all-goods .title {
    height: 20px;
    font-size: 16px;
    text-align: left;
    padding: 10px;
    margin: 0px;
    border-bottom: 1px solid #c0ccda;
  }
  .staplefood ul li {
    list-style: none;
    display: block;
    float: left;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background-color: #42b983;
    padding: 8px;
    margin: 5px;
    cursor: pointer;
  }
  .staplefood .foodImg {
    float: left;
  }
  .staplefood .foodName {
    display: block;
    float: left;
    padding: 10px;
  }
  .staplefood .foodPrice {
    display: block;
    margin-top: 40px
  }
</style>
