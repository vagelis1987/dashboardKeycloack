import React, { useState, useEffect } from 'react';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
//import { Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function VslConnectionInfo(props) {
  const [FBB, setFBB] = useState(0);
  const [fbbLbl, setFbbLbl] = useState('');
  const [VSAT, setVSAT] = useState(0);
  const [vsatLbl, setVsatLbl] = useState('');
  const [OFFLINE, setOFFLINE] = useState(0);
  const [offLbl, setOffLbl] = useState('');
  const [MOBILE, setMOBILE] = useState(0);
  const [mobLbl, setmobLbl] = useState('');
  const vslSatellite = props.vslSatellite;

  useEffect(() => {
    satAvg();
  }, [vslSatellite]);

  const FBBArray = props.data.filter(item => item.connection === 'FBB').length;
  const VSATArray = props.data.filter(
    item => item.connection === 'VSAT'
  ).length;
  const MOBILEArray = props.data.filter(
    item => item.connection === '4G'
  ).length;
  const OFFLINEArray = props.data.filter(
    item => item.connection === 'OFFLINE'
  ).length;

  const satAvg = async () => {
    const totalItems = vslSatellite.length;

    const uniqueItems = [...new Set(vslSatellite)];
    uniqueItems.forEach(currColor => {
      const numItems = vslSatellite.filter(color => color === currColor);
      if (currColor === 'VSAT') {
        let vsatAvg = parseFloat((numItems.length * 100) / totalItems).toFixed(
          0
        );
        setVSAT(vsatAvg);
        setVsatLbl('VSAT');
      }
      if (currColor === '4G') {
        let mobAvg = parseFloat((numItems.length * 100) / totalItems).toFixed(
          0
        );
        setMOBILE(mobAvg);
        setmobLbl('4G');
      }
      if (currColor === 'FBB') {
        let fbbAvg = parseFloat((numItems.length * 100) / totalItems).toFixed(
          0
        );
        setFBB(fbbAvg);
        setFbbLbl('FBB');
      }

      if (currColor === 'OFFLINE') {
        let offAvg = parseFloat((numItems.length * 100) / totalItems).toFixed(
          0
        );
        setOFFLINE(offAvg);
        setOffLbl('OFFLINE');
      }
    });
  };

  const data = {
    labels: [vsatLbl, mobLbl, fbbLbl, offLbl],

    datasets: [
      {
        data: [VSAT, MOBILE, FBB, OFFLINE],
        backgroundColor: ['#1fd3a0', '#0f79e9', '#ffce56', '#c10909'],
        hoverBackgroundColor: ['#1fd3a0', '#2f79e9', '#ffce56', '#c10909'],
      },
    ],
  };

  const options = {
    cutoutPercentage: 50,
    maintainAspectRatio: false,
    responsive: true,
    layout: {
      padding: 0,
    },


    plugins: {
      datalabels: {
        font: {
          size: 11,
        },
        display: true,
        color: 'white',
        formatter: value => {
          let ret = value === 0 ? '' : value + '%';
          return ret;
        },
      },
    },

    legend: {
      display: false,
      position: 'right',
      align: 'middle',
      labels: {
        boxWidth: 30,
        padding: 20,
      },
    },
  };

  return (
    <div >
      <div class='col-xl-12 col-lg-12'>
        <div class='row' style={{ marginTop: '0px' }}>
          <div class='col-lg-6'>
            <div class='card widget-flat'>
              <div class='card-body text-center'>
                <FontAwesomeIcon icon={faWifi} style={{ color: '#1fd3a0' }} />
                <h3 style={{ fontSize: '24px', color: '#607d8b' }}>
                  <span>{VSATArray}</span>
                </h3>

                <p
                  class='text-muted font-10 mb-0'
                  style={{ cursor: 'pointer' }}
                  onClick={() => props.filterVsl('VSAT')}
                >
                  VSAT
                </p>
              </div>
            </div>
          </div>

          <div class='col-lg-6'>
            <div class='card widget-flat'>
              <div class='card-body text-center'>
                <FontAwesomeIcon icon={faWifi} style={{ color: '#2f79e9' }} />
                <h3 style={{ fontSize: '24px', color: '#607d8b' }}>
                  <span>{MOBILEArray}</span>
                </h3>
                <p
                  class='text-muted font-10 mb-0'
                  style={{ cursor: 'pointer' }}
                  onClick={() => props.filterVsl('4G')}
                >
                  4G
                </p>
              </div>
            </div>
          </div>

          <div class='col-lg-6'>
            <div class='card widget-flat'>
              <div class='card-body text-center'>
                <FontAwesomeIcon icon={faWifi} style={{ color: '#ffce56' }} />
                <h3 style={{ fontSize: '24px', color: '#607d8b' }}>
                  <span>{FBBArray}</span>
                </h3>
                <p
                  class='text-muted font-10 mb-0'
                  style={{ cursor: 'pointer' }}
                  onClick={() => props.filterVsl('FBB')}
                >
                  FBB
                </p>
              </div>
            </div>
          </div>

          <div class='col-lg-6'>
            <div class='card widget-flat'>
              <div class='card-body text-center'>
                <FontAwesomeIcon icon={faWifi} style={{ color: '#c10909' }} />
                <h3 style={{ fontSize: '24px', color: '#607d8b' }}>
                  <span>{OFFLINEArray}</span>{' '}
                  <i class='mdi mdi-arrow-up text-success'></i>
                </h3>
                <p
                  class='text-muted font-10 mb-0'
                  style={{ cursor: 'pointer' }}
                  onClick={() => props.filterVsl('OFFLINE')}
                >
                  OFFLINE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
