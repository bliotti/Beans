import PostModelGenerated from "./generated/PostModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PostModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PostModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PostModelGenerated,
  ...customModel
};
