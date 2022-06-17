import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Success = ( ) => {
	return (
		<Stack sx={{ width: '100%', borderRadius: "12px", marginTop: "6%" }} spacing={2}>
			<Alert severity='success'>
                ¡Producto agregado al carrito correctamente!
			</Alert>
		</Stack>
	);
};

export default Success;