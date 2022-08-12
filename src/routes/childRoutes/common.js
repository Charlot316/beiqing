const Routes = [
  {
    path: "/admin/scenicarea",
    component: () => import("views/back/ScenicArea"),
  },
  {
    path: "/admin/scenicspot",
    component: () => import("views/back/ScenicSpot"),
  },
];
export default Routes;
