import { Controller } from 'egg';
// const DbLevel = require('../core/level')
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  // async test2() {
  //   const { ctx } = this

  //   await DbLevel.put('foo', {a: 123})
  //   const value = await DbLevel.get('foo')

  //   console.log(value)
  //   ctx.body = value
  // }
}
