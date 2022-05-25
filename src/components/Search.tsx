import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { StyledForm } from './AllStyles';


interface Props {
	onSearch: (text: string) => void,
}

export default function Search({ onSearch }: Props) {

	const [value, setValue] = useState<string>('london');
 
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		onSearch(value);
	}

	return (
		<StyledForm 
			onSubmit={handleSubmit}
		>
			<TextField 
				variant='outlined'
				label='Search City...'
				sx={{ flex: '1 0', mr: '15px' }}
				size='small'
				value={value}
				onChange={handleChange}
			/>
			<Button
				variant='outlined'
				type='submit'
			>
				Search
			</Button>
		</StyledForm>
	)
}