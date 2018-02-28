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
            <el-button size="mini" type="primary">结账</el-button>
            <el-button size="mini" type="danger">清空</el-button>
          </el-tab-pane>
          <el-tab-pane label="挂单" name='second'>挂单</el-tab-pane>
          <el-tab-pane label="外卖" name='third'>外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="15">
        <h2>这是第二栏</h2>
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
        ]
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
</style>
