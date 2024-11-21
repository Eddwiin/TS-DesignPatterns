export const ROUTE_PATH = {
    AUTH: {
        DEFAULT: '/auth',
        SIGNUP: '/auth/sign-up',
        LOGIN: '/auth/login',
        TEST: {
            children: '/children'
        }
    }
} as const;

type ValuesOf<T> = T[keyof T]
type NestedValues<T> = T extends object ?
    ValuesOf<{
        [k in keyof T]: T extends object ? NestedValues<T[k]> | T[k] : T[k]
    }> : never

type RoutePathValues = NestedValues<typeof ROUTE_PATH>


// SECOND SOLUTION
type NestedRouteValues<T> = T extends object ? { [K in keyof T]: NestedRouteValues<T[K]> }[keyof T] : T;
type RouteValues = NestedRouteValues<typeof ROUTE_PATH>
let test: RouteValues = '/auth'


