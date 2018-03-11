const Koa = require('koa')
const app = new Koa()
const { normal } = require('./tpl')
// 传递中间件
app.use(async (ctx, next) => {
    // 设置返回头
    ctx.type = 'text/html; charset=utf-8'
    // 设置返回体
    ctx.body = normal
})
app.listen(4455)