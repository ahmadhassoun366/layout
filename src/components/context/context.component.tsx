'use client';

import ThemeService from '@/shared/services/theme/theme.service';
import ThemeSvcContext from '@/shared/services/theme/theme.context';
import { QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';
import queryClient from '@/shared/query-client';

const themeSvc = new ThemeService();

type ContextComponentProps = {
	children: ReactNode;
};

export default function ContextComponent({ children }: ContextComponentProps) {
	return (
		<ThemeSvcContext.Provider value={themeSvc}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ThemeSvcContext.Provider>
	);
}