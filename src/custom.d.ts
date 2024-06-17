// declare global {
//   namespace NodeJS {
//     interface Global {
//       Config: {};
//     }
//   }
// }
// export default global;
export {};

declare global {
  namespace NodeJS {
    interface Global {
      Models: typeof import("./src/models/index").default;
    }
  }
}
