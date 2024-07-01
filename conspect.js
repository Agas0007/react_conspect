/****
** Добавить класс body
****************************/

const [isOpen, setIsOpen] = useState(false)
useEffect(() => {
  document.body.classList.toggle('no_scroll', isOpen);
},[isOpen])
    
<button onCLick={()=> setIsOpen(!isOpen)}>Toggle Modal</button>

/*css*/
.no_scroll {
	overflow: hidden;
	height: 0;
}


/* *** или добавить класс hidden body  **** */

 useEffect(() => {
    document.body.classList.toggle("body_hidden", stateCatalog);
  }, [stateCatalog]);



/****
** 
****************************/


  /*-закрыть меню при клике вне меню-*/

  const removeClassMenu = (e) => {
    if (!e.target.closest(".header_catalog_btn, .header_catalog, .header_user_login, .login_box, .humb, .become_seller")) {
      document.querySelector(".header_catalog").classList.remove("header_catalog_visible");
      document.querySelector(".header_catalog_btn").classList.remove("catalog_btn_active");
      document.querySelector(".login_box").classList.remove("login_box_active");
      document.querySelector(".login_box_salesman").classList.remove("login_box_active");
      document.querySelector("body").classList.remove("body_hidden");
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", removeClassMenu);
    return () => document.body.removeEventListener("click", removeClassMenu);
  });

  /* END закрыть меню при клике вне меню-*/