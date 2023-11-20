import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	detailsIsActive: false,
	editIsActive: false,
	createIsActive: false,
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
						state.createIsActive = true;
					} else {
						state.createIsActive = false;
					}
					break;
				default:
					break;
			}
		},
	},
});

export const { toggleModal } = modalsSlice.actions;

export default modalsSlice.reducer;
