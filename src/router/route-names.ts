export enum RoutesEnum {
    Tabs = 'Tabs',
    Stack = 'Stack',
    Stock = 'Stock',
    Profile = 'Profile',
    Authentication = 'Authentication'
}

const ROUTE_NAMES = {
    STACK: {
        THIS: RoutesEnum.Stack,
        AUTHENTICATION: RoutesEnum.Authentication
    },
    TABS: {
        THIS: RoutesEnum.Tabs,
        STOCK: RoutesEnum.Stock,
        PROFILE: RoutesEnum.Profile
    }
};

export default ROUTE_NAMES;
