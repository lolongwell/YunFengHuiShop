<template lang="html">
  <div class="goods-detail">
    <nav-bread>
      <span>商品详情 /</span>
      <span>{{ $route.params.productId }}</span>
    </nav-bread>
    <main>
      <img :src="'static/' + goods.productImage" :title="goods.productName">
      <div>
        <p class="info">{{ goods.productName }}</p>
        <p class="price">售价：￥{{ goods.salePrice }}</p>
        <div class="numb">
          <span>数量：</span>
          <button>-</button>
          <input class="center-text"value="1"/>
          <button>+</button>
        </div>
        <button type="button" name="button" @click="toPay">立即购买</button>
        <button type="button" name="button" @click="addCart">加入购物车</button>
      </div>
    </main>

      <modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成!</span>
        </p>
        <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
          <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
        </div>
      </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import Public from '@/Public'
export default {
  mixins: [Public],
  components: {
    Modal
  },
  data () {
    return {
      productId: '',
      mdShowCart: false,
      goods: {}
    }
  },
  mounted () {
    this.productId = this.$route.params.productId
    this.getGoods()
  },
  methods: {
    closeModal () {
      this.mdShowCart = false
    },
    getGoods () {
      this.$http.get(`/goods/detail?productId=${this.productId}`)
      .then(res => {
        res = res.data
        if (res.status === '0') {
          this.goods = res.result
        }
      })
    },
    addCart () {
      this.$http.post('/goods/addCart', {productId: this.productId})
      .then(res => {
        res = res.data
        if (res.status === '0') {
          this.mdShowCart = true
          this.$store.commit('updateCartCount', 1)
        } else {
          this.mdShow = true
        }
      })
    },
    toPay () {
      this.$router.push({
        path: '/address'
      })
    }
  }
}
</script>

<style scoped>
main{
  width: 90%;
  margin: 0 auto;
  padding: 50px 0;
}
main>img{
  width: 35%;
  height: auto;
}
main>div{
  float: right;
  width: 50%;
}
p.info{
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
}
p.price{
  margin: 20px 0;
  font-size: 20px;
  color: red;
  line-height: 30px;
}
.numb{
  margin: 20px 0;
  font-size: 20px;
}
.numb>button{
  width: 20px;
  height: 20px;
  border: 1px solid black;
  text-align: center;
  line-height: 16px;
}
.numb input{
  position: relative;
  top: -2px;
  width: 30px;
  height: 20px;
  border: 1px solid black;
  margin: 0 10px;
  font-size: 16px;
  text-align: center;
}
button[name=button]{
  padding: 10px;
  margin: 60px 20px 60px 0;
  font-size:20px;
  color: white;
  background: linear-gradient(to top,rgb(235, 8, 8) rgb(158, 6, 6));
}
</style>
