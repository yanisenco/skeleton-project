import NavBar from '../navBar/navBar';
import BreadcrumbCustom from '../breadCrumb/breadCrumb';

function HeaderCustom() {
    return (
      <header>
        <NavBar></NavBar>
        <BreadcrumbCustom></BreadcrumbCustom>
      </header>
    );
  }
  
  export default HeaderCustom;