class ApiEndpoints {
  private static instance: ApiEndpoints;
  private baseUrl: string;

  private constructor() {
    // Initialize the base URL for your API
    this.baseUrl = "https://api.example.com";
  }

  public static getInstance(): ApiEndpoints {
    if (!ApiEndpoints.instance) {
      ApiEndpoints.instance = new ApiEndpoints();
    }
    return ApiEndpoints.instance;
  }

  public getUsersEndpoint(endPoint: string): string {
    return `${this.baseUrl}/${endPoint}`;
  }

  public getPostsEndpoint(endPoint: string): string {
    return `${this.baseUrl}/${endPoint}`;
  }

  // You can add more methods to handle other API endpoints

  // Example method for setting a new base URL dynamically
  public setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl;
  }
}

// Usage example:

const apiInstance1 = ApiEndpoints.getInstance();
console.log(apiInstance1.getUsersEndpoint("users"));

const apiInstance2 = ApiEndpoints.getInstance();
console.log(apiInstance2.getPostsEndpoint("posts"));

// Changing base URL dynamically
apiInstance1.setBaseUrl("https://api.anotherexample.com");
console.log(apiInstance1.getUsersEndpoint("users"));
console.log(apiInstance2.getPostsEndpoint("posts"));

console.log(apiInstance1 === apiInstance2);
