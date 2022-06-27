import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageSuccess = ({ compraID }) => {
	return (
		<div style={{ display: "flex", justifyContent: "center", marginBottom: "3%"}}>
			<Stack sx={{ width: '80%' }} spacing={2}>
				<Alert severity='success'>
					¡Gracias por su compra! su id de transacción es: {compraID}
				</Alert>
			</Stack>
		</div>
	);
};

export default MessageSuccess;