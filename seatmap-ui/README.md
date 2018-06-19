

图形将完全使用HTML和JS和CSS实现，搜索实现以下动作需要的HTML、JS、CSS支持

1. 平面图展示
  1. 加载数据
  2. 平移
  3. 放大和缩小



### Reference Link

https://www.cssscript.com/canvas-based-image-zoom-pan-js-library-wheelzoom/
https://ourcodeworld.com/articles/read/118/top-5-best-javascript-and-jquery-photos-magnifier-plugins
https://codepen.io/techslides/pen/zowLd


## react-router

react-router是由Ryan Florence开发应用reactJs的路由组件。路由系统是web开发中不可或缺的部分，当浏览器的URL发生变化时，路由系统会做出一些响应，以保证用户界面和URL同步。

一般的系统都有一个header menu路由多个页面（通常是一个完整的html或者jsp），通过点击菜单实现不同页面的路由。
考虑React的设计理念，万物皆组件，上句中的html或者jsp变成了组件，多个组件的路由则由react-route实现。

### BrowserRouter

BrowserRouter所做的事情就是允许React Router将应用的路由信息传给任何需要路由信息的组件（通过context），因此要让React Router正常工作，我们必须在应用程序的根节点中渲染BrowserRouter。

```
ReactDOM.render((<BrowserRouter><App/></BrowserRouter>), document.getElementById('root'));
```

### Route

当应用程序的location（浏览器的URL）匹配到某个路由的时候，Route将渲染指定的component，否则渲染null。


## Reference
https://github.com/rccoder/blog/issues/29
https://www.jianshu.com/p/e3adc9b5f75c