import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { StyledProgressBar } from './AllStyles'

interface Props {}

export default function ProgressBar({}: Props) {
	return (
		<StyledProgressBar>
			<CircularProgress />
		</StyledProgressBar>
	)
}