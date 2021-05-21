const Buttom = ( {children, className, onClick} ) => {

    return(
        <button 
            type="button" 
            onClick={onClick} 
            className={className}
        >
            {children}
        </button>
    )

}

export default Buttom;