import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useEffect, useState } from 'react'
import "./work.scss"
import { useAnimation, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { jobs } from '../../utils/jobs';

const SingleWork = ({job}) => {
    return (
        <div className='singleWork'>
            <h3 className='singleWork__heading'>{job.title} <span>@ {job.designation}</span></h3>
            <div className='singleWork__time'>{job.time}</div>
            {job.points.map((point, i) => (
                <p key={i} className='singleWork__point'>{point}</p>
            ))}
        </div>
    )
}

const Work = () => {
    // const [tabIndex, setTabIndex] = useState(0);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const workAnimation = {
        hidden: {
            y: 60,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { 
                duration: 0.5,
                delay: 1
            }            
        }
    }

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
    }, [controls, inView]);

  return (
    <motion.section ref={ref} animate={controls} variants={workAnimation} initial="hidden" className='work' id="experience">
        <h3 className='work__heading'>Where I’ve Worked</h3>
        <div className='work__container'>
            <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                <TabList>
                    {jobs?.map((job) => (
                        <Tab key={job.id}>{job.title}</Tab>
                    ))}
                </TabList>
                {jobs?.map((job) => (
                    <TabPanel key={job.id}><SingleWork  job={job}/></TabPanel>
                ))}
            </Tabs>
        </div>
    </motion.section>
  )
}

export default Work