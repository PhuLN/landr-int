export let baseApiUrl: string = calculateCorrectEndpoint();

function calculateCorrectEndpoint(): string {
  switch (process.env.NODE_ENV) {
    case "development": {
      return "http://localhost:8080/api/";
    }
    case "production": {
      return "http://externalapiorsomething.com/api/";
    }
    default: {
      return "http://externalapiorsomething.com/api/";
    }
  }
}
