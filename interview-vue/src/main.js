import { createApp } from 'vue'
import { Button, List, Sticky, Card, Icon} from 'vant'
import { Tabbar, TabbarItem, Loading } from 'vant'
import { Cell, CellGroup, Form, Field, Tag } from 'vant';
import { Col, Row, Toast } from 'vant';
import { Image as VanImage } from 'vant';
import { ConfigProvider } from 'vant';
import { SwipeCell, Picker, Popup } from 'vant';
import { NavBar, Lazyload, Divider, Skeleton } from 'vant';

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)


app.use(Button).use(List).use(Sticky).use(Card).use(Icon)
app.use(Tabbar).use(TabbarItem).use(Loading)
app.use(Cell).use(CellGroup).use(Form).use(Field).use(Tag)
app.use(Col).use(Row).use(Toast)
app.use(VanImage)
app.use(ConfigProvider)
app.use(SwipeCell).use(Picker).use(Popup)
app.use(NavBar).use(Lazyload).use(Divider).use(Skeleton)
app.use(store)
app.use(router)
app.mount('#app')