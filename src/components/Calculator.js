import React, { useState } from 'react';
import Rows from './Rows';
import Display from './Display';
import '../css/calculator.css';

const Calc = () => {
  const [obj, setObj] = useState({ total: null, operation: null, next: null });

  return (
    <>
      <div className="calc">
        <h1>Lets do some math!</h1>
        <main>
          <Display obj={obj} />
          <div>
            <div className="rows">
              <Rows row={['AC', '+/-', '%', '÷']} setObj={setObj} />
            </div>
            <div className="rows">
              <Rows row={['7', '8', '9', 'x']} setObj={setObj} />
            </div>
            <div className="rows">
              <Rows row={['4', '5', '6', '-']} setObj={setObj} />
            </div>
            <div className="rows">
              <Rows row={['1', '2', '3', '+']} setObj={setObj} />
            </div>
            <div className="rows">
              <Rows row={['0', '.', '=']} setObj={setObj} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Calc;
