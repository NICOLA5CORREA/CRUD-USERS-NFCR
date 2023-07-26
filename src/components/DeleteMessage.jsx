import React, { useState } from 'react';
import { useEffect } from "react";

const DeleteMessage = ({
  deleted,
  setDeleted
}) => {
    const {eliminado, handleEliminado} = useState(false);

    useEffect (() => {
      eliminado(deleted)
    }, [deleted])
    
    const message = data => {
      if(deleted) {
      //deleted message
      handleDelete('/users', updateInfo.id, data)
      setDeleted()
      }
      }



  return (
    <div>
      {eliminado && (
        <div className="mensaje-eliminacion">
          Eliminación exitosa.
        </div>
      )}

      <button onClick={handleEliminado}>Eliminar</button>
    </div>
  );
};

export default DeleteMessage;
