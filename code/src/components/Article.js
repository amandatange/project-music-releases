import React from 'react';

// v1 Named export
// export const Article = () => {
//     return (
//         <article className='article'> 
//           <h2>Students like React</h2>
//           <p>According to new studies blab lbab blablabla</p>
//           <p>March 7th</p>
//           <img src='https://picsum.photos/150' alt='random depiction'></img>
//           <div className='tag-container'>
//             <span className='tag'>Programming</span>
//             <span className='tag'>React</span>
//             <span className='tag'>Learning</span>
//           </div>
//         </article>
//     );
// }

// v2 Default export
const Article = () => {
    return (
        <article className='article'> 
          <h2>Students like React</h2>
          <p>According to new studies blab lbab blablabla</p>
          <p>March 7th</p>
          <img src='https://picsum.photos/150' alt='random depiction'></img>
          <div className='tag-container'>
            <span className='tag'>Programming</span>
            <span className='tag'>React</span>
            <span className='tag'>Learning</span>
          </div>
        </article>
    );
}

export default Article