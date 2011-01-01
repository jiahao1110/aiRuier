require({
	baseUrl: './',
	paths: {
		'core': 'core/core-pkg-min'
	}
}, ['seed-min', 'core'], function() {
	var S = KISSY,
		AR = S.app('AR');
	AR.namespace('Home');
	AR.add('home', function(ar) {
		var dom = S.DOM, evt = S.Event,
			EMPTY = '';
		ar.Home = function() {
			var self = this;
			if (!(self instanceof ar.Home)) {
				return new ar.Home();
			}
			self.util.init();
		};
		ar.Home.prototype.util = {
			init: function() {
				alert('小瑞 我爱你！');
			}
		};
	});
	AR.Home();
});