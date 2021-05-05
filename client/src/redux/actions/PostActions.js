import actionsFunction from "./generated/PostActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import PostApi from "../../api/PostApi";
 
 actionsFunction.loadPostList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return PostApi
     .getPostList()
     .then(list => {
       dispatch(actionsFunction.loadPostSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
