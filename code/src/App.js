// import React from 'react'
// import data from './data.json'

// console.log(data)

// export const App = () => {
//   return (
//     <div>
//       Find me in src/app.js!
//     </div>
//   )
// }





// Från föreläsningen 

import React from 'react'

// v1 Named import
// import { Article } from 'components/Article';

// v2 Default import
import Article from 'components/Article';


export const App = () => {
  return (
    <section>
      <Article />
    </section>
  );
}
