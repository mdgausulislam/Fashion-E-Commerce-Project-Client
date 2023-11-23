import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Services from '../Services/Services';
import Customers from '../Customers/Customers';
import Testimonial from '../Testimonial/Testimonial';
import ProjectMessage from '../ProjectMessage/ProjectMessage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Services></Services>
            <Customers></Customers>
            <Testimonial></Testimonial>
            <ProjectMessage></ProjectMessage>
        </div>
    );
};

export default Home;