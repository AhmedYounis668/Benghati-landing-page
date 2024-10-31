import React, { useEffect, useState } from "react";

export const NavbarHook = () => {
    const afun = () => {
        let navbarrr = document.getElementById("nav1");

        window.addEventListener("scroll", () => {
          //  const srollable =
          //   document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const scrollwidth=window.innerWidth;
          if(scrollwidth>600)
          {
          if (scrolled >740) {
            // navbarrr.style.backgroundColor = "white";
            navbarrr.classList.add("whenscroll");

          }
        }
        else if(scrollwidth<600)
        {
          if (scrolled >270) {
            // navbarrr.style.backgroundColor = "white";
            navbarrr.classList.add("whenscroll");

          }
        }
        

          if (scrolled === 0) {
            navbarrr.classList.remove("whenscroll");

          }
    
          if (scrolled > 0) {
            navbarrr.style.marginTop = "0";
          } else {
            navbarrr.style.marginTop = "0";
          }
        });
      
      };
    
      useEffect(() => {
        afun();
        window.removeEventListener("scroll", afun);
      }, []);



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // for search

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseopen = () => {
    setOpen(false);
  };
 return [show,open,handleClose,handleShow,handleClickOpen,handleCloseopen]
}
