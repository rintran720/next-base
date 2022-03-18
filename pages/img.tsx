import type { NextPage } from 'next';
import Image from 'next/image';

const Img: NextPage = () => {
	return <Image src={require('./img.jpg')} />;
};

export default Img;
