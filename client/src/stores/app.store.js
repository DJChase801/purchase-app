import { createContext } from 'react';
import { types, flow, getEnv } from 'mobx-state-tree';

const { optional, maybeNull, model, string, boolean } = types;

// Model
export const AppStore = model('AppStore', {
	user: optional(string, ''),
	organization: optional(string, ''),
})
	.views((self) => ({
		
	}))
	.volatile(() => ({
	}))
	.actions((self) => ({
		afterCreate() {
		},
        setUser(user) {
            self.user = user;
        },
        setOrganization(organization) {
            self.organization = organization;
        },
	}));

// Context
export const AppStoreContext = createContext(AppStore);