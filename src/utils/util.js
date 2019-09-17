export const loadStyle = (url)=>{
  // <link rel="stylesheet" href="">
    // 动态插入css 
  // 创建link标签
  const link = document.createElement('link');
  // 赋值type
  link.type = 'text/css';
  // 赋值rel 为样式表
  link.rel = "stylesheet";
  link.href = url;
  // 插入到head中 
  let head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
}
// 设置浏览器的标题表头
export const setTitle = (title)=>{
  title = title?title:'默认管理后台'
  window.document.title = title
}