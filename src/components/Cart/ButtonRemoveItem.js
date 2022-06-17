//import * as React from 'react';
import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ItemCountRemoveItem from './ItemCountRemoveItem';
import { Context } from '../../../../Context/Context';
import {Data} from "../../../../data/Data"
import { useParams } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ButtonRemoveItem = (stock) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeItem = useContext (Context)
  const { itemId } = useParams();

  const myData = Data.find((item) => item.id === itemId);

  const items = myData

  return (
    <div>
      <Button onClick={handleOpen}>X</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h5>¿Cuantos items quieres remover?</h5>
        <ItemCountRemoveItem id={items.id} onClick={ removeItem }/>
        </Box>
      </Modal>
    </div>
  );
}

export default ButtonRemoveItem