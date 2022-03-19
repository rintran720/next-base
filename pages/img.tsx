import { NextPageWithLayout } from '@/models';
import Image from 'next/image';
import { AdminLayout } from '../components/layouts';

const Img: NextPageWithLayout = () => {
	return <Image src={require('./img.jpg')} />;
};

Img.Layout = AdminLayout;
export default Img;
