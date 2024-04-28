import CustomerSales from "~/components/CustomerSales";

import Avatar from "../../../../../public/avatars/avatar.png";
import Avatar1 from "../../../../../public/avatars/avatar1.png";
import Avatar2 from "../../../../../public/avatars/avatar2.png";
import Avatar3 from "../../../../../public/avatars/avatar3.png";
import Avatar4 from "../../../../../public/avatars/avatar4.png";

export default function OverviewSales() {
  return (
    <>
      <CustomerSales
        name="Isabella Johannson"
        email="isabellajohannson@email.com"
        avatar={Avatar}
        data="+$1,000"
      />
      <CustomerSales
        name="John Smith"
        email="johnsmith@email.com"
        avatar={Avatar1}
        data="+$500"
      />
      <CustomerSales
        name="Emma Johnson"
        email="emmajohnson@email.com"
        avatar={Avatar2}
        data="+$2,500"
      />
      <CustomerSales
        name="Alex Rodriguez"
        email="alexrodriguez@email.com"
        avatar={Avatar3}
        data="+$750"
      />
      <CustomerSales
        name="Sophia Williams"
        email="sophiawilliams@email.com"
        avatar={Avatar4}
        data="+$3,200"
      />
    </>
  );
}
