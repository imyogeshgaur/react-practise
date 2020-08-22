import React from 'react';
import ReactDOM from 'react-dom';
import Card from './App'
import sdata from'./sdata'


ReactDOM.render(
  <>
    <Card 
    imgsrc = {sdata[0].imgsrc[0]}
    link ={sdata[0].link}
    sname ={sdata[0].sname}
    title = {sdata[0].title}
    />
    <Card
    imgsrc = {sdata[1].imgsrc}
    link ={sdata[1].link}
    sname ={sdata[1].sname}
    title = {sdata[1].title}
    />
  </>,
  document.getElementById('root')
  );

