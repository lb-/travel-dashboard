import React, { Component } from 'react'
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCAKy4AtmT0dkZxvRJRJzsStJdYuVUC6kM",
  authDomain: "travel-dashboard.firebaseapp.com",
  databaseURL: "https://travel-dashboard.firebaseio.com",
  storageBucket: "travel-dashboard.appspot.com",
  messagingSenderId: "62084682313"
};

firebase.initializeApp(firebaseConfig);

import Clock from '../components/Clock';
import City from '../components/City';
import Logo from '../components/Logo';
import Country from '../components/Country';
import Stats from '../components/Stats';
import Flights from '../components/Flights';
import dashboardLayout from '../components/dashboardLayout';


class DashboardGrid extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cityName: null,
      cityTimezone: 'Asia/Bangkok',
      cityWeather: '31℃ and Sunny',
    };
  }
  componentWillMount () {
    firebase.database().ref('/currentLocation/').once('value').then(
      (snapshot) => {
        let currentLocation = snapshot.val();
        console.log('setting currentLocation', currentLocation);
        this.setState({
          cityName: currentLocation.city.name,
          cityTimezone: currentLocation.city.timezone,
          cityWeather: '31℃ and Sunny',
        });
      }
    );
  }
  render () {
    return (
      <ResponsiveReactGridLayout
        className="layout"
        cols={dashboardLayout.columns}
        rowHeight={55}
        breakpoints={dashboardLayout.breakpoints}
        layouts={dashboardLayout.responsiveLayouts}
        >
        <div key={'logo'}><Logo/></div>
        <div key={'city'}>
          <City
            cityName={this.state.cityName}
            cityWeather={this.state.cityWeather}/>
        </div>
        <div key={'clock'}>
          <Clock cityTimezone={this.state.cityTimezone}/>
        </div>
        <div key={'country'}><Country/></div>
        <div key={'flights'}><Flights /></div>
        <div key={'stats'}><Stats /></div>
      </ResponsiveReactGridLayout>
    )
  }
};

export default DashboardGrid;
