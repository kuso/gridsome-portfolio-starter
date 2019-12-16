export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Tag.vue")
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--vue-components-in-markdown-md" */ "/Users/scott/test/gridsome-portfolio-starter/docs/vue-components-in-markdown.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/pages/Blog.vue")
  },
  {
    path: "/what-i-ate-for-breakfast/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Post.vue")
  },
  {
    path: "/top-5-static-site-generators-in-vue/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Post.vue")
  },
  {
    path: "/vue-vs-react-comparison/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Post.vue")
  },
  {
    path: "/mac-pro-2019-review/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Post.vue")
  },
  {
    path: "/how-to-get-better-at-coding/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Post.vue")
  },
  {
    path: "/introduction-to-gridsome/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Post.vue")
  },
  {
    path: "/freelance-vs-full-time-work/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Post.vue")
  },
  {
    path: "/design-for-developers/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/templates/Post.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/pages/Docs.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/scott/test/gridsome-portfolio-starter/src/pages/404.vue")
  }
]

