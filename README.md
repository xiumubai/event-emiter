# event-emiter

## 实现 Api

| 事件名称           | 参数                  | 名词解释                                                       |
| ------------------ | --------------------- | -------------------------------------------------------------- |
| on                 | event, [arg1], [arg2] | 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数  |
| addListener        | event, listener       | on 的同名函数                                                  |
| emit               | event, listener       | 按监听器的顺序执行执行每个监听器                               |
| once               | event, listener       | 只触发一次，随后便解除事件监听                                 |
| removeListener     | event, listener       | 移除指定事件的某个监听回调                                     |
| removeAllListeners | event                 | 移除指定事件的所有监听回调                                     |
| setMaxListeners    | num                   | 用于提高监听器的默认限制的数量。（默认 10 监听回调个产生警告） |
| listeners          | event                 | 返回指定事件的监听器数组                                       |

## 使用方式

### 安装

`npm install @xiumu/event-emiter --save` or `yarn add @xiumu/event-emiter --save`

### 引入

```js
import EventEmiter from '@xiumu/event-emiter';
const event = new EventEmiter();
```

### emit

```js
event.emit('event1', 'event1');
```

### on

```js
event.on('event1', (res) => {
  console.log('evene1触发了', res);
});
```

## demo

```js
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
```
