declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
