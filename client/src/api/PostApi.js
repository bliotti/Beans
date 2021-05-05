import PostApiGenerated from "./generated/PostApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class PostApi extends PostApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Post List
  static getPostList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/posts")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default PostApi;