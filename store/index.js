import {
	createStore
} from 'vuex'
import bar from './modules/bar.js'
import user from './modules/user.js'
import classes from './modules/classes.js'
import sign from './modules/sign.js'
import notice from './modules/notice.js'
export default createStore({
	modules: {
		bar,
		user,
		classes,
		sign,
		notice
	}
})
