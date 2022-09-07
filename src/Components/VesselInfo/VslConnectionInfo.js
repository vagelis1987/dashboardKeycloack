import React, { useState, useEffect, Component } from 'react';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function VslConnectionInfo(props) {

  const vslSatellite = props.data;

  return (

    <Card >
      <ListGroup variant="flush">

        {vslSatellite.map((i) => (
          <ListGroup.Item key={i}>
            <FontAwesomeIcon icon={faWifi} style={{ color: '#2f79e9' }} />
          </ListGroup.Item>

        ))}


      </ListGroup>
    </Card>

  );
}
