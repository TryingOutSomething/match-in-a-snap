export default [
  {
    path: "/",
    meta: {
      name: "Home"
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    children: [
      {
        path: "",
        meta: {
          name: "User Preference"
        },
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/BaseBody.vue")
      },
      {
        path: "/terms",
        meta: {
          name: "Terms of Use"
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/components/Terms.vue")
      }
    ]
  }
];
