import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => cleanup());

describe('tmp', () => {
	test('a', () => {
		render(<h1>Hello</h1>);

		expect(screen.getByText('Hello')).toBeInTheDocument();
	});
});
