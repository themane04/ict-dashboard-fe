import {computed, signal} from '@angular/core';
import {User} from '../interfaces/auth.interface';

export const _user = signal<User | null>(null);
export const _authInitialized = signal(false);
export const isLoggedIn = computed(() => !!_user());

export const setUser = (u: User | null) => {
  _user.set(u);
  _authInitialized.set(true);
};
