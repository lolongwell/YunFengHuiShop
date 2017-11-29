# shop
vue全家桶+nodejs+mongodb商城
功能描述：
注册（自定义组件，插槽，父子组件之间通信[data,components, methods, axios]) 欠缺表单验证，用户名是否可用验证，错误提示
登录（ajax验证用户名密码是否正确，cookie）
退出(cookie)
商品列表展示（支持价格排序，支持价格筛选，滚动加载更多，图片懒加载）
商品详情页面（显示商品详情）
加入购物车（先验证是否登录，未登录时提示登录）
购物车页面（显示购物车中的列表以及是否选中的状态和数量总价等，从购物车中删除，修改商品数量，限制了最小值，是否选中功能，全选自动关联到选中的状态，动态计算总价）
确认地址页面（显示收货地址列表，并自动选中默认地址，添加收货地址，删除收货地址，设置某个地址为默认地址）
结算页面（根据满减等算法动态计算订单总价）
下订单功能(自动清除已经购买的商品)
订单成功页面
订单列表展示（取消订单功能）

技术点：Vue的声明式渲染，组件，Vue-Router, Vuex, Axios, Vue-Cli(node, Webpack, express), VueLazyload, VueInfiniteScroll, ESLint, SVG
Vue:
devTools
data
methods
钩子函数：created mounted
路由的观察：watch
计算后属性：computed, 里面有getter, setter
子组件注册：components
路由：传参，编程式导航
mixins混合：提取公共的业务逻辑
filter过滤器：全局过滤器
自定义指令：v-focus

常用指令，事件绑定

项目启动：
mongod
cd api
npm run dev
cd ../client
npm run dev
