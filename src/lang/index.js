import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'
import zh from './zh.js'
import en from './en.js'
Vue.use(VueI18n)

// 国际化
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh,
    en
  }
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
