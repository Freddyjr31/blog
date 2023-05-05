'use strict';
const e = React.createElement;
const useState = React.useState;
const axios = './node_modules/axios'

function LikeButton (){
  const [Like,setLike] = useState(0);

  return(
    <React.Fragment>
      <button onClick={() => setLike(Like+1)}> count {Like}</button>
    </React.Fragment>
  );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<LikeButton/>);