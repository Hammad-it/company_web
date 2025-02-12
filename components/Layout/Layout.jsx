import React, {Fragment} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar';

const Layout = (props) => {
  return (
    <Fragment>
        <Navbar/>
            <div>
                {props.children}
            </div>
        <Footer/>
    </Fragment>
  );
}

export default Layout