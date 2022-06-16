import { LoginModel } from 'src/models';

async function login(data: LoginModel): Promise<boolean> {
  /* TODO: SEND DATA TO SERVER */

  /* MOCK */
  if (data.username === 'admin' && data.password === 'admin') {
    return true;
  }

  throw new Error('Invalid Data');
}

export const AuthService = {
  login,
};
