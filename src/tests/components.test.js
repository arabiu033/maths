import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Display from '../components/Display';
import Home from '../components/Home';
import Header from '../components/Header';
import Rows from '../components/Rows';
import Quote from '../components/Quote';
import Calc from '../components/Calculator';

it('render correctly Display component', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  const display = renderer.create(<Display obj={obj} />).toJSON();
  expect(display).toMatchSnapshot();
});

it('render correctly Header component', () => {
  const header = renderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON();
  expect(header).toMatchSnapshot();
});

it('render correctly Quote component', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});

it('render correctly Home component', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});

it('render correctly Rows component', () => {
  const row = renderer.create(<Rows row={['1', '2', '3']} setObj={() => {}} />).toJSON();
  expect(row).toMatchSnapshot();
});

it('render correctly Calc component', () => {
  const calc = renderer.create(<Calc />).toJSON();
  expect(calc).toMatchSnapshot();
});
