/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-28 16:40:47
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-28 16:40:49
 * @FilePath: /event-emiter/demo/index.js
 * @Description:
 */
// 方法测试
var event = new EventEmiter();

setTimeout(() => {
  event.emit('event1', 'event1');
  event.emit('event2', 'event2');
}, 1500);

event.on('event1', (res) => {
  console.log('evene1触发了', res);
});

event.on('event1', (res) => {
  console.log('evene1触发了', res);
});

event.on('event2', (res) => {
  console.log('evene2触发了', res);
});
