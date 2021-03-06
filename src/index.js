import Vue from 'vue/dist/vue.js';
import { ikonyglowne } from './icons.js';
import {videoSources} from './videoData';
import { iconA,iconAclicked,iconB,iconBclicked,iconC,iconCclicked,homeButton,homeButtonclicked } from './icons.js';



var app = new Vue({
  el: '#app',
  
  data: () => {
    return {
     
      ikon1: {
        src: iconA.src,
        src2: iconAclicked.src,
        seen: true,
        hover: false
      },
      ikon2: {
        src: iconB.src,
        src2: iconBclicked.src,
        seen: true,
        hover: false
      },
      ikon3: {
        src: iconC.src,
        src2: iconCclicked.src,
        seen: true,
        hover: false
      },
      homeicon: {
        src:homeButton.src,
        src2:homeButtonclicked.src,
        seen: false,
        hover: false
      },
      video: {

        src: "",
        seen: false,
       
      },
      buttonforward1: {
        seen: false
      },
      buttonreverse1: {
        seen: false
      },
      buttonforward2: {
        seen: false
      },
      buttonreverse2: {
        seen: false
      },
      buttonforward3: {
        seen: false
      },
      buttonreverse3: {
        seen: false
      },
      
    }
  },
  methods: {
    ikon1change1: function () {
      this.ikon1.hover = false;
     
      this.ikon2.seen = false;
      this.ikon3.seen = false;
     
      this.buttonforward1.seen = true;
      this.video.seen = true;
      this.video.src = videoSources[0];
      this.homeicon.seen = true;
    },
    ikon2change1: function () {
      this.ikon2.hover = false;
     
      this.ikon1.seen = false;
      this.ikon3.seen = false;
      this.video.seen = true;
      this.video.src = videoSources[3];
     
      this.buttonforward2.seen = true;
      this.homeicon.seen = true;
    },
    ikon3change1: function () {
      this.ikon3.hover = false;
     
      this.ikon1.seen = false;
      this.ikon2.seen = false;
      this.video.seen = true;
      this.video.src = videoSources[5];
      
      this.buttonforward3.seen = true;
      this.homeicon.seen = true;
    },
    btnforA: function () {
     this.video.src=videoSources[2];
     this.buttonreverse1.seen = true;
     this.buttonforward1.seen = false;
     
    },
    btnrevA: function () {
    this.video.src=videoSources[0];
    this.buttonforward1.seen = true;
    this.buttonreverse1.seen = false;

    },
    btnforB: function () {
     this.video.src=videoSources[4];
     this.buttonreverse2.seen = true;
     this.buttonforward2.seen = false;
    },
    btnrevB: function () {
      this.video.src=videoSources[3];
    this.buttonforward2.seen = true;
    this.buttonreverse2.seen = false;
    },
    btnforC: function () {
      this.video.src=videoSources[6];
      this.buttonreverse3.seen = true;
      this.buttonforward3.seen = false;


    },
    btnrevC: function () {
   
      this.video.src=videoSources[5];
    this.buttonforward3.seen = true;
    this.buttonreverse3.seen = false;

    },
    home_click: function () {
     
      this.video.seen = false;
      
      this.buttonreverse1.seen = false;
      this.buttonforward1.seen = false;
      this.buttonreverse2.seen = false;
      this.buttonforward2.seen = false;
      this.buttonreverse3.seen = false;
      this.buttonforward3.seen = false;
      this.ikon1.seen = true;
      this.ikon2.seen = true;
      this.ikon3.seen = true;
      this.homeicon.seen = false;
      this.homeicon.hover = false;
    }
  }
})