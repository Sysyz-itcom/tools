function showrth(){
	layui.use(function(){
		var $ = layui.$;
		var layer = layui.layer;
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			shadeClose: true,
			time: 2000,
			content: '<div style="padding:20px;"><h2 style="color: #01b3eb;">特别提示</h2><h4>上游服务出现问题</h4><h4>解析接口可能出现异常。</h4><h4>我们正在尝试修复该问题！</h4></div>'
		})
	})
}
window.onload(showrth())
