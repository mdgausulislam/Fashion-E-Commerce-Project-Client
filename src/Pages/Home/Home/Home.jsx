import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Services from '../Services/Services';
import Customers from '../Customers/Customers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Services></Services>
            <Customers></Customers>
        </div>
    );
};

export default Home;