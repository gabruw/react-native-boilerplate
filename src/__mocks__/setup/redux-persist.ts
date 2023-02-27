jest.mock("redux-persist", () => ({
    ...jest.requireActual("redux-persist"),
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
}));
