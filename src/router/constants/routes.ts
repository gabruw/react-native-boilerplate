enum StackRoutes {
    Guest = "Guest",
    SignUp = "SignUp",
    SignIn = "SignIn",
    Welcome = "Welcome",
}

enum MainTabsRoutes {
    Home = "Home",
    Profile = "Profile",
}

const Routes = {
    ...StackRoutes,
    ...MainTabsRoutes,
};

export { Routes, StackRoutes, MainTabsRoutes };
