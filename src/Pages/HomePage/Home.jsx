import React from 'react';
import './Home.css';

// Import Components
import MainBtn from '../../Components/MainBtn/MainBtn';
import HeaderImg from '../../Components/HeaderImg/HeaderImg';
import BgImg from './../../Components/BgImg/BgImg';
import FooterLinks from '../../Components/FooterLinks/FooterLinks';
import ImageComp from '../../Components/ImageComp/ImageComp';
import EvidenceDesc from '../../Components/EvidenceDesc/EvidenceDesc';

// Import Images
import mainImg from '../../assests/main-home.png'
import aboutImg from '../../assests/about-left.jpg.png'
import evidenceOne from '../../assests/evidence-1.png'
import evidenceTwo from '../../assests/evidence-2.png'
import evidenceThree from '../../assests/evidence-3.png'

// Import data
import { evidence, homeFeatures, homeTeam, partners, serviceCards } from '../../data';

// Icons
import {BiRightArrowAlt} from 'react-icons/bi'
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import TeamCards from '../../Components/TeamCards/TeamCards';
import FeatureCards from '../../Components/FeatureCards/FeatureCards';


const Home = () => {
  return (
    <main>
      
      <header className=' overflow-hidden'>
        <HeaderImg src={mainImg}  desc= 'A NEW SYSTEMATIC APPROACH TO MAXIMIZING YOUR STUDENTSLEARNING OUTCOME' />
      </header>
      
      {/* Partners Section */}
      <section className='partner-home p-5 partner-home'>

        <h1 className='text-center mb-5'>STS Partiner</h1>

        <div className="row justify-content-between p-5 gy-4">

          {partners?.map((partner, idx) =>
          <ImageComp src={partner.img} key={idx}/>
          )}
          


        </div>

      </section>

      {/* About Section */}
      <section className='about-home p-5'>
        <div className="row py-5">

          <div className="col-md-5">
            <ImageComp src={aboutImg}/>
          </div>
          <div className="col-md-6 offset-md-1 d-flex align-items-center py-5">

            <div>
              <h5 className='green-color mb-3'>About Us</h5>
              <h2 className='blue-color head-title mb-4'>Smart Teaching System</h2>
              <p className='silver-color '>The smart education system is a scientific model and framework based on international research and studies, designed to raise the performance of professors, teachers, and educators in universities and schools, and advance education to unprecedented levels. The system has been developed, tried, tested and proven effective.</p>
              <MainBtn shadow={false}>Read More <BiRightArrowAlt className='px-2 text-dark' /> </MainBtn>
            </div>

          </div>
        </div>

      </section>
      
      {/* Evidence Section */}
      <section className='evidence-home p-5'>
        <h1 className='text-center head-title mb-5'>Evidence-based and Systematic <br/>Education</h1>

          <div className="row g-4 py-4">
            
            <div className="col-md-7 d-flex align-items-center">
              <EvidenceDesc title={evidence[0].title} desc={evidence[0].desc} className='hide'/>
            </div>
            
            <div className="col-lg-4 offset-lg-1 col-md-5 custom-padding">
              <BgImg src={evidenceOne} className='left'/>
            </div>
          
          </div>

          <div className="row g-4 py-4">

            <div className="col-lg-4 col-md-5 custom-padding">
              <BgImg src={evidenceTwo} className='right'/>
            </div>

            <div className="col-md-6 offset-lg-1 d-flex align-items-center offset-md-1">
              <EvidenceDesc title={evidence[1].title} desc={evidence[1].desc} className='hide'/>
            </div>

          </div>

          <div className="row g-4 py-4">
            
            <div className="col-md-7 d-flex align-items-center">
              <EvidenceDesc title={evidence[2].title} desc={evidence[2].desc}/>
            </div>
            
            <div className="col-lg-4 offset-lg-1 col-md-5 custom-padding">
              <BgImg src={evidenceThree} className='left'/>
            </div>
          
          </div>
      </section>

      {/* Services Section */}
      <section className='p-5 service-home'>

        <h5 className='green-color text-center'>Services</h5>
        <h1 className='text-center my-2'>Our Services That We Provide</h1>
        <p className='text-center'>We are renowned for thinking “outside the square” which enables us to tailor your<br/> business to your specific circumstances and requirements.</p>

        <div className="row gy-4">
          {serviceCards.map((card, idx) => 
          <div className="col-md-6 col-lg-3" key={idx} >
            <ServiceCard {...card}/>
          </div>
          )}
      </div>

      </section>

      {/* Teachers Section */}
      <section className='p-5 mb-4 teachers-home'>
        <h5 className='green-color text-center'>Expert Teacher</h5>
        <h1 className='text-center'>Make a Big Difference as a Certified <br/>Expert Teacher</h1>

        <TeamCards cards={homeTeam}/>

      </section>

      {/* Features Section */}
      <section className='p-5 '>
        <FeatureCards cards={homeFeatures}/>
      </section>

      <FooterLinks />
    </main>
  );
};

export default Home;
