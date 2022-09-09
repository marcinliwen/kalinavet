import React from "react"
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

const years = 10;
const operations = 390;
const clients = 9210;

const Officecounter = () => (
        <InView triggerOnce delay={300}>
            {({ inView, ref, entry }) => (
            <div className="flex max-w-fit gap-4 md:gap-8 my-8 counter-up  border-t border-gray-800 pt-4" ref={ref}>
                <div className="counter-element max-w-fit">
                    <div className="text-3xl"><CountUp start={inView? 0 : years} end={years} duration={4}/></div>
                    <div className="counter-title">Jahre Erfahrung</div>
                </div>   
                <div className="counter-element max-w-fit" >
                    <div className="text-3xl"><CountUp start={inView? 0 : operations} end={operations} duration={4}/></div>
                    <div className="counter-title">erfolgreiche Operationen</div>
                </div>
                <div className="counter-element max-w-fit">
                    <div className="text-3xl"><CountUp start={inView? 0 : clients} end={clients} duration={4}/></div>
                    <div className="counter-title">Glückliche Haustiere</div>
                </div>   
            </div>
            )}
        </InView>
    )

export default Officecounter