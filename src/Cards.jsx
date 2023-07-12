import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { MdOutlineAutoGraph, MdOutlinePeopleOutline } from 'react-icons/md';
import { TbTools } from 'react-icons/tb';
import { FaHeadset } from 'react-icons/fa';

const CardsArr = () => {
  return [
    {
      id: 0,
      title: 'DevOps engineers',
      description: 'Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads.',
      icon: <HiOutlineRocketLaunch />
    }, {
      id: 1,
      title: 'Data scientist',
      description: 'Business decisions are better when backed by data. Give visibility to the data that support your strategies.',
      icon: <MdOutlineAutoGraph />
    }, {
      id: 2,
      title: 'Software engineers',
      description: 'Help engineers be more efficient and streamline knowledge sharing using a tool they already love and trust.',
      icon: <TbTools />
    }, {
      id: 3,
      title: 'Support Teams',
      description: 'Level up your support by providing information to your customers using a natural interface: questions and answers.',
      icon: <FaHeadset />
    }, {
      id: 4,
      title: 'Engineering leaders',
      description: 'Help your team get the information they need to do their job - reduce burnout and help engineers grow and learn together.',
      icon: <MdOutlinePeopleOutline />
    }
  ];
};

export default CardsArr;
