const config = require('./config');

Component({
	options: {
		styleIsolation: 'apply-shared'
	},
	properties: {
		nodes: {
			type: Object,
			value: {}
		}
	},
	data: {
		text: ""
	},
	lifetimes: {
		attached: function () {
			const _ts = this;

			config.events.forEach(item => {
				_ts['_' + item] = function (...arg) {
					if (global._events && typeof global._events[item] === 'function') {
						global._events[item](...arg);
					}
				};
			});
		}
	},
	methods: {
		textcopy: function(e) {
			var that = this;
			console.log('textcopy:',e);
			wx.setClipboardData({
				data: that.data.text,
				success: function (res) {
					wx.showToast({
						title: '复制成功',
					});
				}
			});
		},
	}
})