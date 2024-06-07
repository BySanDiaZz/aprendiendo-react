export const Square =  ({ children, isSelected, updateBoard, index }) => {

    //aplicar estilos al turno actual
    const className = `square ${isSelected ? 'is-selected' : ''}`;
  
    const handleClick = () => {
      //actualizar celda en el tablero
      updateBoard(index)
    }
  
    return (
      //renderizar Square
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }