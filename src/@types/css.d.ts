declare module "*.module.css" {
	const classes: { [key: string]: string };
	export = classes;
}

declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export = classes;
}

declare module "*.svg" {
	const content: any;
	// eslint-disable-next-line import/no-default-export
	export default content;
}
