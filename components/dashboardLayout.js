let dashboardLayout = {};
dashboardLayout.breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
dashboardLayout.columns = {lg: 20, md: 9, sm: 4, xs: 5, xxs: 2};
dashboardLayout.responsiveLayouts = {
  lg: [
    {i:'logo', w: 5, h: 6, x: 0, y: 0},
    {i:'city', w: 4, h: 3, x: 5, y: 0},
    {i:'clock', w: 4, h: 3, x: 9, y: 0},
    {i:'stats', w: 8, h: 3, x: 5, y: 3},
    {i:'country', w: 7, h: 12, x: 14, y: 0},
    {i:'flights', w: 13, h: 2*3, x: 0, y: 3},

  ],
  md: [
    {i:'logo', w: 2, h: 6, x: 0, y: 0},
    {i:'city', w: 2, h: 3, x: 2, y: 0},
    {i:'clock', w: 2, h: 3, x: 4, y: 0},
    {i:'country', w: 3, h: 12, x: 6, y: 0},
    {i:'stats', w: 4, h: 3, x: 2, y: 2},
    {i:'flights', w: 6, h: 6, x: 0, y: 6},
  ],
  sm: [
    {i:'logo', w: 1.5, h: 3, x: 0, y: 0},
    {i:'city', w: 2.5, h: 3, x: 1.5, y: 0},
    {i:'clock', w: 2.5, h: 3, x: 1.5, y: 3},
    {i:'country', w: 2, h: 9, x: 5, y: 0},
    {i:'stats', w: 1.5, h: 3, x: 0, y: 3},
    {i:'flights', w: 4, h: 3, x: 0, y: 7},
  ],
  sm: [
    {i:'logo', w: 2, h: 3, x: 0, y: 0},
    {i:'city', w: 2, h: 3.5, x: 2, y: 0},
    {i:'clock', w: 2, h: 3.5, x: 2, y: 3},
    {i:'country', w: 2, h: 7, x: 0, y: 2},
    {i:'stats', w: 2, h: 3, x: 2, y: 5},
    {i:'flights', w: 4, h: 5, x: 0, y: 8},
  ],
  xs: [
    {i:'logo', w: 1, h: 3, x: 0, y: 0},
    {i:'city', w: 2, h: 2.5, x: 1, y: 0},
    {i:'clock', w: 2, h: 2.5, x: 4, y: 0},
    {i:'stats', w: 2, h: 6, x: 0, y: 8},
    {i:'country', w: 3, h: 7, x: 4, y: 14},
    {i:'flights', w: 5, h: 12, x: 0, y: 21},

  ],
};
export default dashboardLayout
