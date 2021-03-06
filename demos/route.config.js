import navConfig from './nav.config';
import langs from './i18n/route';

const LOAD_MAP = {
  'urpt': name => {
    return r => require.ensure([], () =>
      r(require(`./pages/urpt/${name}.vue`)),
    'urpt');
  }
};

const load = function(lang, path) {
  return LOAD_MAP[lang](path);
};

const LOAD_DOCS_MAP = {
  'urpt': path => {
    return r => require.ensure([], () =>
      r(require(`./docs/urpt${path}.md`)),
    'urpt');
  }
};

const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path);
};

const registerRoute = (navConfig) => {
  let route = [];
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang];
    console.log('lang====', lang);
    route.push({
      path: `/${lang}/component`,
      redirect: `/${lang}/component/installation`,
      component: load(lang, 'component'),
      children: []
    });
    navs.forEach(nav => {
      if (nav.href) return;
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index);
        });
      } else {
        addRoute(nav, lang, index);
      }
    });
  });
  function addRoute(page, lang, index) {
    const component = loadDocs(lang, page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component
    };

    route[index].children.push(child);
  }

  return route;
};

let route = registerRoute(navConfig);

const generateMiscRoutes = function(lang) {
  let indexRoute = {
    path: `/${ lang }`, // 首页
    meta: { lang },
    name: 'home' + lang,
    component: load(lang, 'index')
  };

  return [ indexRoute ];
};

langs.forEach(lang => {
  route = route.concat(generateMiscRoutes(lang.lang));
// route = route;
});

route.push({
  path: '/play',
  name: 'play',
  component: require('./play/index.vue')
});

let defaultPath = 'urpt/component/installation';

route = route.concat([{
  path: '/',
  redirect: defaultPath
}, {
  path: '*',
  redirect: defaultPath
}]);
console.log('routes====', route);
export default route;
