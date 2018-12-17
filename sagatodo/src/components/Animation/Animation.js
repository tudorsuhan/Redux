import React, { Component } from 'react';

export default class Animation extends Component {
  render() {
    return (
      <div id="cubes">
        <figure id="cubes-header">
          <div id="header-hero"></div>
        </figure>
        <template id="cube-template">
          <div class="cube">
            <div class="shadow"></div>
            <div class="sides">
              <div class="back"></div>
              <div class="top"></div>
              <div class="left"></div>
              <div class="front"></div>
              <div class="right"></div>
              <div class="bottom"></div>
            </div>
          </div>
        </template>
      </div>
    );
  }
}
