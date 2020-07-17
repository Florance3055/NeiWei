import Vue from 'vue';
import {
  Menu,
  MenuItem,
  Input,
  Button,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  Container,
  Header,
  Main,
  MessageBox,
  Message,
  Tooltip
} from 'element-ui';


Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Tooltip);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;