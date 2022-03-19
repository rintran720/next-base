import * as React from 'react';
import { LayoutProps } from '../../models';

export function MainLayout({ children }: LayoutProps) {
	return (
		<div>
			<p>Main layout</p>
			{children}
		</div>
	);
}
