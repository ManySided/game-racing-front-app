import {GetterTree} from 'vuex';
import {ProfileState} from './types';
import {RootState} from '../types';

export const getters: GetterTree<ProfileState, RootState> = {
    fullName(state): string {
        const {user} = state;
        const firstName = (user && user.login) || '<Пустой>';
        console.log("getter" + firstName)
        return `${firstName}`;
    },
};