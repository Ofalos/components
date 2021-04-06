
// Import vue components
import * as components from '@/lib-components/index';
import '@/assets/main.scss'

// install function executed by Vue.use()
const install = function installComponents(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
