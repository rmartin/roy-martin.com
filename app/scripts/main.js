import vendorStyle from '../styles/vendor.scss';
import mainStyle from '../styles/main.scss';

import app from './app.js';
import IndexModule from './modules/index/IndexModule';
import AboutModule from './modules/about/AboutModule';

new IndexModule();
new AboutModule();
app.start();
