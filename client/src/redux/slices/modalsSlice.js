import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	detailsIsActive: false,
	editIsActive: false,
	createIsActive: false,
	dateOfCreation: '',
};

const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		toggleModal: (state, action) => {
			//only 'open' or 'close'
			const status = action.payload.status;
			//only 'details', 'edit', 'create'
			const modal = action.payload.modal;
			const date = action.payload.date;

			switch (modal) {
				case 'details':
					if (status === 'true') {
						state.detailsIsActive = true;
					} else {
						state.detailsIsActive = false;
					}
					break;
				case 'edit':
					if (status === 'true') {
						state.editIsActive = true;
					} else {
						state.editIsActive = false;
					}
					break;
				case 'create':
					if (status === 'true') {
						if (date) {
							state.dateOfCreation = date;
						}
						state.createIsActive = true;
					} else {
						state.createIsActive = false;
					}
					break;
				default:
					break;
			}
		},
		resetDateOfCreation: (state) => {
			state.dateOfCreation = '';
		},
	},
});

export const { toggleModal, resetDateOfCreation } = modalsSlice.actions;

export default modalsSlice.reducer;
