import { changeFromToRegExp } from "./src/transformers";

const content = "The deployment metadata is defined in [`AppDeployMetadata`](./code/interfaces/types_app.AppDeployMetadata), which is an object with:";

console.log(changeFromToRegExp(/\[(.+?)\]\(\.\/code\/.+?\)/g, '$1')(content));

