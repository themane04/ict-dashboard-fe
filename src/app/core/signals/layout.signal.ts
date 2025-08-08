import {computed, signal} from '@angular/core';
import {environment} from '../consts/environment';

const config = environment.config;

export const sidebarExpanded = signal(false);
export const sidebarWidth = computed(() => (sidebarExpanded() ? config.sidebarExpandedWidth : config.sidebarCollapsedWidth));

export const contentOffset = computed(() => config.sidebarCollapsedWidth);
