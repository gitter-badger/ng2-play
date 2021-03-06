// TODO: to be removed as soon as angular team exposes these on some public namespace

import { Observable } from 'angular2/angular2';

export function isObservable (obs: any): boolean {
	return obs instanceof Observable;
}
export const isNativeShadowDomSupported: boolean = Boolean(document && document.body && document.body.createShadowRoot); // http://caniuse.com/#feat=shadowdom

export function isObject (obj: any): boolean {
	return obj !== null && (typeof obj === 'function' || typeof obj === 'object');
}

export function isPresent (obj: any): boolean {
	return obj !== undefined && obj !== null;
}

export function isNumber (obj: any): boolean {
	return typeof obj === 'number';
}

export function isBlank (obj: any): boolean {
	return obj === undefined || obj === null;
}

export function isString (obj: any): boolean {
	return typeof obj === 'string';
}

export function isFunction (obj: any): boolean {
	return typeof obj === 'function';
}