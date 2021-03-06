import {
	describe,
	it,
	expect,
	beforeEach
} from 'angular2/test';

import { LowerCasePipe } from './lowercase';

export function main () {
	describe('LowerCasePipe', () => {
		let pipe;
		let str;
		let upper;
		let lower;
		beforeEach(() => {
			pipe = new LowerCasePipe();
			str = 'something';
			lower = 'something';
			upper = 'SOMETHING';
		});
		describe('transform', () => {
			it('should return lowercase', () => {
				var val = pipe.transform(upper);
				expect(val).toEqual(lower);
			});
			it('should lowercase when there is a new value', () => {
				var val = pipe.transform(upper);
				expect(val).toEqual(lower);
				var val2 = pipe.transform('WAT');
				expect(val2).toEqual('wat');
			});
			it('should not support other objects', () => { expect(() => pipe.transform(new Object())).toThrowError(); });
		});
	});
}