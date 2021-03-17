import { atom } from "recoil";

// create a title for the appropriate component
// be sure to use easy to understand names OR comment well :)

//testing state
export const testState = atom({
  key: "test",
  default: "Test",
});

// portfolio state

export const userInfo = atom({
  key: "user",
  default: [],
});

// Main Search Box Query
export const mainSearchQuery = atom({
  key: "mainSearchQuery",
  default: '',
});

export const isAuthenticated = atom({
    key: 'isAuthenticated',
    default: 'false'
})

