import React, { Component } from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import logo from './logo.svg';
import './App.css';

class AppSwagger extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      url: `http://petstore.swagger.io/v2/swagger.json`,
      presets: [presets.apis],
    });
  } 
  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

export default AppSwagger;
