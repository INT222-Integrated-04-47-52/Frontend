import React from 'react';
import Banner from './HomeComponent/Banner'
import Collection from './HomeComponent/Collection';
import exampleImage from './HomeComponent/exampleImage';

function Home(){
  return( 
<div><Banner/>
<Collection/>
<exampleImage/>
</div>

    );
  };
export default Home;