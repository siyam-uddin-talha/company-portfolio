export type NavbarRouteType = {
  title: string;
  route?: string;
  icon?: React.ReactNode;
  onClick?: Function;
};

export type RoutingContent = {
  title: string;
  subTitle: string;
  route: string;
  icon: React.ReactNode;
};

export type MenuContent = {
  title: string;
  route: string;
};

export type MultipleRoute = {
  catagory: string;
  routes: NavbarRouteType[];
};
