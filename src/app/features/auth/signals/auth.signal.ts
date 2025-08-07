import {computed, signal} from '@angular/core';
import {SignUpResponse} from '../interfaces/auth.interface';

const _user = signal<SignUpResponse | null>(null);

export const user = _user;

export const isLoggedIn = computed(() => !!_user());
export const isCoach = computed(() => _user()?.role === 'Coach');

export const userRole = computed(() => _user()?.role ?? null);

const _authInitialized = signal(false);
export const authInitialized = _authInitialized.asReadonly();

export const setUser = (newUser: SignUpResponse | null) => {
  _user.set(newUser)
  _authInitialized.set(true);
};
