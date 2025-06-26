import { useState, lazy, Suspense } from "react";

const Hello = lazy(() => import("./Hello"));

function DisplayGreet() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={()=>(setShow(prev => !prev))} style={{border:'2px solid brown' , backgroundColor :'linen' , padding:10,margin:5}}>{show === 'true' ?'Hide' :'Show'}</button>
      {show && (
        <Suspense fallback ={<div style={{color:'goldenrod',backgroundColor:'black', width:'fit-content',padding:5 }}>Loading...</div>}>
          <Hello />
        </Suspense>
      )}
    </>
  );
}

export default DisplayGreet