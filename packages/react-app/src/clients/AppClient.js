import { IAppContext } from "../contexts/AppContext";

import { User } from "../types/User";

class AppClient {
  // user: User;

  /**
   * Creates an instance of AppClient.
   * @memberof AppClient
   */
  constructor() {
    this.user = {
      id: "20593kld030340lfclodr3",
      name: "Tv punks",
      email: "tv.punks@support.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      isAdmin: true,
      isActive: true,
      isVerified: true,
    };
  }
}

export default AppClient;
