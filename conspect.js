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



/****
** 
****************************/