import React from 'react';
import SectionHome from '../components/Home/sectionHome'
import SectionCards from '../components/Home/sectionCards'
import SectionServicos from '../components/Home/sectionServicos'
import Slide from '../components/Slide/index'

const Home = () => {
  return (
    <React.Fragment>
        <div>
        <Slide />
        </div>
        <div>
        <SectionHome />
        </div>
        <div>
        <SectionCards />
        </div>
        <div>
        <SectionServicos />
        </div>
    </React.Fragment>

  );
}

export default Home;