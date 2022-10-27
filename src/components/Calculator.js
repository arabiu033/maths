import React, { useState } from 'react';
import Rows from './Rows';
import Display from './Display';

const Calc = () => {
  const [obj, setObj] = useState({ total: null, operation: null, next: null });

  return (
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
  );
};

export default Calc;
