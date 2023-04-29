import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App
})
// import Highlight from '@/components/common/hl.js'; // from 路径是highlight.js的路径，纯属自定义
// Vue.use(Highlight);
app.$mount()

// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import store from '@/store/index.js'
import hljs from 'highlight.js'
import 'highlight.js/styles/a11y-dark.css' // 这里可以切换不同的主题
import hljsVuePlugin from '@highlightjs/vue-plugin'
export function createApp() {
	const app = createSSRApp(App)
	// console.log(hljs.highlight)
	// hljs.highlightAll();
	app.directive('highlight', function(el) {
		let blocks = el.querySelectorAll('pre code');
		setTimeout(() => {
			blocks.forEach((block) => {
				hljs.highlightBlock(block)
			})
		}, 200)
	})
	app.use(store)
	app.use(hljsVuePlugin)
	// console.log(app)
	return {
		app
	}

}
// #endif
