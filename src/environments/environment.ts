// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  spoonacular: {
    baseUrl: 'https://api.spoonacular.com/',
    keys: [
      '84d547a31b13472887505c20cd5a4245',
      '55d1ef367376428c82c005f334b035ce',
      '36a4609876c146509be11f98b097011d',
      'f9611665da104479856c1fac0c6032c9',
      '66902da9ef0542c28124109ceabddb71'
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
