import * as React from 'react';
import { LayoutProps } from '../../models';

export function AdminLayout({ children }: LayoutProps) {
	return (
		<div>
			<p>Admin layout</p>
			{children}
		</div>
	);
}
