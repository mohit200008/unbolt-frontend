import { Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Invoices from './pages/Invoices';
import Product from './pages/Product';
import Customer from './pages/Customer';
import Invoice from './pages/Invoice';

function Routes() {
    // let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/products" exact>
          <Products/>
        </Route>
        <Route path="/products/:Id" exact>
          <Product/>
        </Route>
        <Route path="/customers" exact>
          <Customers/>
        </Route>
        <Route path="/customers/:Id" exact>
          <Customer/>
        </Route>
        <Route path="/invoices" exact>
          <Invoices/>
        </Route>
        <Route path="/invoices/:Id" exact>
          <Invoice/>
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
