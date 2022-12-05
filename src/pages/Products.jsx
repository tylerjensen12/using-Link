import {Link} from 'react-router-dom'

function Products() {
  return (
    <div>
      <h2>This is the Products page</h2>
      <li><Link to='/products/p1'>A book</Link></li>
      <li><Link to='/products/p2'>Carpet</Link></li>
      <li><Link to='/products/p3'>A Car</Link></li>
    </div>
  );
}

export default Products;
