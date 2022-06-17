import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageSuccess = ({ purchaseID }) => {
	return (
		<div style={{ display: "flex", justifyContent: "center", marginBottom: "3%"}}>
			<Stack sx={{ width: '50%' }} spacing={2}>
				<Alert severity='success'>
					Gracias por su compra! su id de transacción es: {purchaseID}
				</Alert>
			</Stack>
		</div>
	);
};

export default MessageSuccess;