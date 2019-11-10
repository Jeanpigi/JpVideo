import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/Home.scss';

const Home = ({ mylist, trends, originals }) => {

    return (
        <React.Fragment>
            <Search />
            {mylist.length > 0 &&
                <Categorias title="Mi Lista">
                    <Carousel>
                        {mylist.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categorias>
            }
            

            <Categorias title="Tendencias">
                <Carousel>
                    {trends.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categorias>

            <Categorias title="Originales">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem  key={item.id} {...item} />
                    )};
                </Carousel>
            </Categorias>
        </React.Fragment>
    ); 
}

const mapStateToProps = state => {
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);