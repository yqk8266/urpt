<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
  import { use } from 'main/locale';
  import zhLocale from 'main/locale/lang/urpt';

  const lang = location.hash.replace('#', '').split('/')[1] || 'urpt';
  const localize = lang => {
    switch (lang) {
      case 'urpt':
        use(zhLocale);
        break;
      default:
    }
  };
  localize(lang);

  export default {
    name: 'app',

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'urpt';
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      }
    },

    watch: {
      lang(val) {
        if (val === 'urpt') {
          // this.suggestJump();
        }
        localize(val);
      }
    },

    methods: {
      suggestJump() {
        if (process.env.NODE_ENV !== 'production') return;

        const href = location.href;
        const preferGithub = localStorage.getItem('PREFER_GITHUB');
        const cnHref = href.indexOf('eleme.cn') > -1 || href.indexOf('urpt-cn') > -1 || href.indexOf('urpt.faas') > -1;
        if (cnHref || preferGithub) return;
      }
    },

    mounted() {
      localize(this.lang);
      if (this.lang === 'urpt') {
        this.suggestJump();
      }
    }
  };
</script>
