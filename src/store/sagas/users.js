import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.list.find(user => user.id === data.id));

    if (isDuplicated) {
      console.toast.error('Usuário duplicado');
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatarUrl: data.avatar_url,
        location: action.payload.location,
      };
      yield put(UserActions.addUserSuccess(userData));
      console.toast.success('Usuário adicionado com sucesso');
    }
  } catch (err) {
    console.toast.error('Erro ao adicionar usuário');
  }
}
