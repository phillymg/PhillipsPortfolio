import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=4052ad15"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=4052ad15"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom from "/node_modules/.vite/deps/react-dom.js?v=4052ad15"; const ReactDOM = __vite__cjsImport2_reactDom.__esModule ? __vite__cjsImport2_reactDom.default : __vite__cjsImport2_reactDom;
import App from "/src/App.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "/node_modules/.vite/deps/@apollo_client.js?v=4052ad15";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});
ReactDOM.render(
  /* @__PURE__ */ jsxDEV(ApolloProvider, { client, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "/Users/phillipguetterman/bootcamp/group/Stockosaurus/client/src/main.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/Users/phillipguetterman/bootcamp/group/Stockosaurus/client/src/main.jsx",
    lineNumber: 12,
    columnNumber: 3
  }, this),
  document.getElementById("root")
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWUk7QUFaSixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsU0FBUztBQUNoQixTQUFTQyxjQUFjQyxlQUFlQyxzQkFBc0I7QUFFNUQsTUFBTUMsU0FBUyxJQUFJSCxhQUFhO0FBQUEsRUFDOUJJLEtBQUs7QUFBQSxFQUNMQyxPQUFPLElBQUlKLGNBQWM7QUFDM0IsQ0FBQztBQUVESCxTQUFTUTtBQUFBQSxFQUNQLHVCQUFDLGtCQUFlLFFBQ2QsaUNBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFBQSxFQUNBQyxTQUFTQyxlQUFlLE1BQU07QUFDaEMiLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dyYXBocWwnLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICA8QXBwIC8+XG4gIDwvQXBvbGxvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sImZpbGUiOiIvVXNlcnMvcGhpbGxpcGd1ZXR0ZXJtYW4vYm9vdGNhbXAvZ3JvdXAvU3RvY2tvc2F1cnVzL2NsaWVudC9zcmMvbWFpbi5qc3gifQ==