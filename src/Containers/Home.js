import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSync } from '@fortawesome/free-solid-svg-icons';
import styles from "./Home.module.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VslConnectionInfo from '../Components/VesselInfo/VslConnectionInfo'
import VesselHorizontalBar from '../Components/vslChart/VesselHorizontalBar'

import { useDispatch, useSelector } from "react-redux";
import { fetchAllVesselsConnection } from "../redux/actions/analyticActions";


const Home = () => {

  const vesselConnection = useSelector((state) => state.allAnalytic.vesselConnection);
  const dispatch = useDispatch();


  useEffect(() => {
    getVesselData();
  }, []);

  const getVesselData = () => {
    dispatch(fetchAllVesselsConnection());

  }


  console.log(vesselConnection)

  return (
    <main className={styles.container}>
      <div className={styles.welcome}>
        <h4>
          Hello , User.
        </h4>
        <p>Welcome to CITD Admin</p>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.info}>
          <p>
            <FontAwesomeIcon icon={faClock} style={{
              color: '#98a6ad', fontSize: '13px',
            }} /> Latest Ping Response: { }
          </p>
        </div>

        <div className={styles.options}>
          <button onClick={() => getVesselData()}>
            <FontAwesomeIcon
              icon={faSync}
              style={{ color: '#fff', fontSize: '11px' }}
              size='xs'
            />
            Vessels Ping
          </button>
        </div>
      </div>


      <div>
        <Row>
          <Col sm={7}>

            <VesselHorizontalBar data={vesselConnection} />
          </Col>
          <Col sm={5}>
            b
          </Col>
        </Row>

      </div>



    </main>
  );
};

export default Home;
