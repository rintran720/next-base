import { AppPropsWithLayout } from '@/models';
import '@/styles/globals.scss';
import { EmptyLayout } from '../components/layouts';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
